'use strict';

function showPodcastLink() {
  var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  if /* if we're on iOS, show the podcast links */
    (isMac ||
     (navigator.platform.indexOf("iPhone") != -1) ||
     (navigator.platform.indexOf("iPad") != -1) ||
     (navigator.platform.indexOf("iPod") != -1))
    {
      var podcastLink = document.getElementById("podcast-link");
      podcastLink.style.display = "block"
    }
}

function gotoPage(pageNumber) {
  loadPage(pageNumber,mainQuery(seriesPerPage,pageNumber));
}

function drawPageLinks(seriesCountData) {
  var numberOfSeries = seriesCountData.data._allSeriesMeta.count;
  var numberOfPages = Math.ceil(numberOfSeries / seriesPerPage);

  document.querySelectorAll('.pagelinks').forEach(function(pageLinksDiv) {
    var pageNumber;
    for (pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
      var pageLinkElement = document.createElement('div');
      pageLinkElement.className = "pagelink";
      pageLinkElement.innerHTML = `<a href="#" onclick="gotoPage(${pageNumber});return false;">${pageNumber.toString()}</a>`;
      pageLinksDiv.appendChild(pageLinkElement);
    }
  });

}

function updatePageWithSermons(sermon_data) {

  var sermonSeriesSection = document.getElementById("sermon-container");

  var sermonSeriesTemplate = document.getElementById('sermon_series_template');
  var sermonTemplate = document.getElementById('sermon-template');
  
  var series;
  for (series of sermon_data.data.allSeries) {

    //Instantiate a series template.
    var sermonSeriesDiv = document.importNode(sermonSeriesTemplate.content, true);
    
    //Determine if all sermons in this series relate to the same event.
    var sermonEvents = Array.from(new Set(series.sermons.map(sermon => sermon.event.name)));
    var event = null;
    if (sermonEvents.length == 1) {
      event = sermonEvents[0];
    } else {
      event = "Various Events";
    }

    //Fill in series data.
    sermonSeriesDiv.querySelector(".series-title").textContent = series.name;
    if (series.subtitle && series.subtitle != series.name) {
      sermonSeriesDiv.querySelector(".series-book").textContent = series.subtitle;
    }
    sermonSeriesDiv.querySelector(".series-service").textContent = event;
    sermonSeriesDiv.querySelector(".series-graphic").setAttribute("style",`background-image: url(${series.image3x2Url});`);

    var sermonList = sermonSeriesDiv.querySelector(".sermon-list");
    
    var sermon;
    for (sermon of series.sermons) {
      //Instantiate a sermon template.
      var sermonDiv = document.importNode(sermonTemplate.content, true);

      //Parse the date string and format it nicely to be just a date.
      var dateString = new Date(Date.parse(sermon.preachedAt)).toLocaleDateString();

      //Fill in sermon data.
      sermonDiv.querySelector(".sermon-title").textContent   = sermon.name;
      sermonDiv.querySelector(".sermon-speaker").textContent = sermon.speakers[0].name;
      sermonDiv.querySelector(".sermon-passage").innerHTML   = `<a href="https://www.biblegateway.com/passage/?search=${sermon.passage}&version=NIVUK">${sermon.passage}</a>`;
      sermonDiv.querySelector(".sermon-date").textContent    = dateString;
      sermonDiv.querySelector(".sermon-download").setAttribute("href",sermon.url);
      sermonDiv.querySelector(".sermon-player").setAttribute("src",sermon.url);

      sermonList.appendChild(sermonDiv);
    }

    sermonSeriesSection.appendChild(sermonSeriesDiv);
  }
}
function queryGraphCool(url, query) {
  return fetch(url, {
    body: JSON.stringify(query),
    headers: {'content-type': 'application/json'},
    method: 'POST'
  })
  .then(response => response.json());
}

var seriesPerPage = 30;

function mainQuery(pageSize,pageNumber) {
  return { "query" :
  `query {
    allSeries(first: ${pageSize} skip: ${(pageNumber - 1) * pageSize}) {
      name
      subtitle
      image3x2Url
      sermons(orderBy: preachedAt_ASC) {
        name
        preachedAt
        url
        passage
        event {
          name
        }
        speakers {
          name
        }
      }
    }
  }`};
}

var serviceID = "cjhoh936q44gz0181840a6nlj";
var graphCoolURL = `https://api.graph.cool/simple/v1/${serviceID}`;

function setupPaginationLinks() {
  var seriesCountQuery = {"query":"query {_allSeriesMeta {count}}"};
  queryGraphCool(graphCoolURL,seriesCountQuery)
  .then(drawPageLinks)
  .catch(function(rejection){
    console.log(rejection);
  });
}

function getTalksFromGraphCool(q,pageNumber,pageSize) {
  console.log("----");
  console.log(q);
  console.log("----");
  queryGraphCool(graphCoolURL,q)
  .then(updatePageWithSermons)
  .then(hideLoading)
  .catch(function(rejection){
    hideLoading();
    showLoadingError();
    console.log(rejection);
  });
}

function showLoading() {
  var loadingDiv = document.getElementById("loading");
  console.log(loadingDiv);
  //loadingDiv.style.display = "block";
}

function hideLoading() {
  var loadingDiv = document.getElementById("loading");
  loadingDiv.style.display = "none";
}

function hideNoJavascript() {
  var noJavascript = document.getElementsByClassName("no-javascript");
  Array.from(noJavascript).forEach(function(item) {
    console.log(item);
    item.style.display = "none";
  });
}

function showLoadingError() {
  var loadingErrorDiv = document.getElementById("loading-error");
  loadingErrorDiv.style.display = "block";
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function clearDivById(id) {
  document.getElementById(id).innerHTML = "";
}

function setCurrentPageCSSClass(newCurrentPageNumber) {
  //remove "current" class from old page link.
  document.querySelectorAll(".current-pagelink").forEach(function(pagelinkDiv) {
    pagelinkDiv.className = "pagelink";
  });

  //Iterate over all page links
  document.querySelectorAll(".pagelink").forEach(function(pagelinkDiv) {
    var links = pagelinkDiv.getElementsByTagName('a');
    if (links[0] && parseInt(links[0].textContent) == newCurrentPageNumber) {
      pagelinkDiv.className = "pagelink current-pagelink";
    }
  });
}

function loadPage(pageNumber,query) {
  //clear out the old content before we load new stuff in.
  clearDivById("sermon-container");
  showLoading();

  sleep(50).then(() => {
    getTalksFromGraphCool(query,pageNumber,seriesPerPage);
    setCurrentPageCSSClass(pageNumber);
  });
}

//Do things when the DOM content has loaded so that we can safely manipulate the DOM.
document.addEventListener("DOMContentLoaded", function() {
  
  hideNoJavascript();
  showPodcastLink();
  setupPaginationLinks();

  var initialPage = 1;
  loadPage(initialPage,mainQuery(seriesPerPage,initialPage));
  setCurrentPageCSSClass(initialPage);
});
