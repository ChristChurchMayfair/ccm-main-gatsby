const songItemPattern = /> (.*)/;
const confessionPattern = /Confession: (\d+)/;

const biblePassageElements = {
  morning: document.getElementById("bible-passage-morning"),
  evening: document.getElementById("bible-passage-evening")
};
const gospelShapeElements = {
  morning: document.getElementById("gospel-shape-morning"),
  evening: document.getElementById("gospel-shape-evening")
};
const runningOrderElements = {
  morning: document.getElementById("running-order-morning"),
  evening: document.getElementById("running-order-evening")
};

const confessionTextViewers = {
  morning: document.createElement("li"),
  evening: document.createElement("li")
};
confessionTextViewers.morning.classList.add("viewer");
confessionTextViewers.evening.classList.add("viewer");
confessionTextViewers.morning.style.display = "none";
confessionTextViewers.evening.style.display = "none";

const runningOrderItems = { morning: [], evening: [] };

const showLyricsViewers = { morning: [], evening: [] };
const hideLyricsViewers = { morning: [], evening: [] };
const lyricsViewers = { morning: [], evening: [] };

function setConfessionText(confessionText, service) {
  confessionTextViewers[service].innerHTML = `${confessionText.replace(
    /\n/g,
    "<br>"
  )}<br><a href="javascript:void(0)" class="hide" onclick="hideConfessionText('${service}');return false;">(hide)</a>`;
}

function showConfessionText(service) {
  confessionTextViewers[service].parentElement.scrollIntoView(true, {
    behavior: "smooth"
  });
  confessionTextViewers[service].style.display = "block";
}

function hideConfessionText(service) {
  confessionTextViewers[service].style.display = "none";
}

function setBiblePassage(biblePassage, service) {
  biblePassageElements[service].textContent = biblePassage;
}

function setGospelShape(gospelShape, service) {
  gospelShape.split("\n\n").forEach(textItem => {
    const textItemMatches = textItem.match(/(\w+): (.+)/);
    const newGospelShapeItem = document.createElement("p");
    newGospelShapeItem.innerHTML = textItemMatches
      ? `<strong>${textItemMatches[1]}</strong>` + `: ${textItemMatches[2]}`
      : textItem;
    gospelShapeElements[service].appendChild(newGospelShapeItem);
  });
}

function addLyricsViewerLiElement(songLyrics, index, service) {
  const newLyricsViewerElement = document.createElement("li");
  newLyricsViewerElement.classList.add("viewer");
  newLyricsViewerElement.style.display = "none";
  hideLyricsViewers[service].push(() => {
    newLyricsViewerElement.parentElement.scrollIntoView(true, {
      behavior: "smooth"
    });
    newLyricsViewerElement.style.display = "none";
  });
  showLyricsViewers[service].push(() => {
    newLyricsViewerElement.style.display = "block";
  });
  newLyricsViewerElement.innerHTML = `${songLyrics.replace(
    /\n/g,
    "<br>"
  )}<br><br><a href="javascript:void(0)" class="hide" onclick="hideLyricsViewers['${service}'][${index}]();return false;">(hide)</a>`;
  lyricsViewers[service].push(newLyricsViewerElement);
}

function createSongLiElement(songTitle, songIndex, service) {
  const newSongElement = document.createElement("li");
  newSongElement.className = "song-item";
  newSongElement.innerHTML = `${songTitle} <a href="javascript:void(0)" onclick="showLyricsViewers['${service}'][${songIndex}]();return false;">(see lyrics)</a>`;
  newSongElement.append(lyricsViewers[service][songIndex]);
  return newSongElement;
}

function createNonSongLiElement(item, isConfession, service) {
  const newNonSongElement = document.createElement("li");
  newNonSongElement.classList.add("non-song");
  newNonSongElement.innerHTML = isConfession
    ? `${item} <a href="javascript:void(0)" onclick="showConfessionText('${service}');return false;">(read this)</a>`
    : item;
  if (isConfession) {
    newNonSongElement.classList.add("confession");
    newNonSongElement.append(confessionTextViewers[service]);
  }
  return newNonSongElement;
}

function setRunningOrder(service) {
  let songIndex = 0;
  runningOrderItems[service].forEach(textItem => {
    console.log(textItem);
    if (textItem.match(songItemPattern)) {
      runningOrderElements[service].appendChild(
        createSongLiElement(
          textItem.match(songItemPattern)[1],
          songIndex,
          service
        )
      );
      songIndex++;
    } else if (textItem.match(confessionPattern)) {
      runningOrderElements[service].appendChild(
        createNonSongLiElement(textItem, true, service)
      );
    } else {
      runningOrderElements[service].appendChild(
        createNonSongLiElement(textItem, false, service)
      );
    }
  });
}

const dataCellSetters = {
  A2: setBiblePassage,
  C4: setGospelShape,
  J4: setConfessionText
};

function isCellReferenceRunningOrderItem(column, row) {
  return column === "A" && row >= 4;
}

function isCellReferenceLyrics(column, row) {
  return "D" <= column && column < "J" && row == 4;
}

function onResponse(data, service) {
  data.feed.entry.forEach(entry => {
    const reference = entry.title.$t;
    const setter = dataCellSetters[reference];
    if (setter) {
      setter(entry.content.$t, service);
    } else {
      const cellReferenceMatches = entry.title.$t.match(/([A-Z]+)(\d+)/);
      const column = cellReferenceMatches[1];
      const row = cellReferenceMatches[2];
      if (isCellReferenceRunningOrderItem(column, row)) {
        runningOrderItems[service].push(entry.content.$t);
      } else if (isCellReferenceLyrics(column, row)) {
        addLyricsViewerLiElement(
          entry.content.$t,
          column.charCodeAt(0) - "D".charCodeAt(0),
          service
        );
      }
    }
  });
  setRunningOrder(service);
}

const onResponseMorning = data => onResponse(data, "morning");
const onResponseEvening = data => onResponse(data, "evening");
