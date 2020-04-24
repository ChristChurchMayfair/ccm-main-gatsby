

//Do things when the DOM content has loaded so that we can safely manipulate the DOM.
document.addEventListener("DOMContentLoaded", function() {


    console.log("Honest Questions script loaded");
 
    var now = Date.now();
    
    console.log("Remove all events before: ${now}");
    
    var carolEvents = document.querySelectorAll("section.honest-questions .events.immediate .event");
    var i;
    for (i = 0; i < carolEvents.length; i++) {
        var validUntil = new Date(carolEvents[i].getAttribute("valid_until"));
        if (validUntil <= now) {
            carolEvents[i].parentNode.removeChild(carolEvents[i]);
        }
    }

});