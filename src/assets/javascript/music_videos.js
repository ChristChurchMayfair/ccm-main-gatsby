function showVimeoVideo(vimeoLink,autoplay) {
    var vimeoContainer = document.getElementById("vimeo-container");

    document.querySelectorAll("#vimeo-container iframe").forEach(function(vimeoIframe){
        vimeoIframe.src = `${vimeoLink}?color=ff0179&byline=0&portrait=0&autoplay=${autoplay}`;
    });

    vimeoContainer.style.display = "block";
    vimeoContainer.style.height = "auto";
}


//Do things when the DOM content has loaded so that we can safely manipulate the DOM.
document.addEventListener("DOMContentLoaded", function() {
    console.log("Music video script");
    document.getElementById("vimeo-container").style.display = "none";

    var musicVideoLinks = document.querySelectorAll(".music_video a.video-play-link")
    musicVideoLinks.forEach(function(musicVideoLink) {
        var oldLink = musicVideoLink.href;
        musicVideoLink.href = "#/";
        musicVideoLink.addEventListener('click', function(){
            showVimeoVideo(oldLink,1);
            return false;
        });
    });
});