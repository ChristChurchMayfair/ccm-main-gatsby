// export    getMapsURLForLatLongPlatform: function(latitude,longitude,platform) {
//       var isMac = platform.toUpperCase().indexOf('MAC') >= 0;
//       var isiPhone = platform.indexOf("iPhone") >= 0;
//       var isiPad = platform.indexOf("iPad") >= 0;
//       var isiPod = platform.indexOf("iPod") >= 0;
//       var isiOS = isiPhone || isiPad || isiPod;
//
//       var protocol = "https"
//
//       if (isiOS) {
//         protocol = "maps"
//       }
//       return `${protocol}://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`
//     }



var latitude = 51.505263;
var longitude = -0.148704;

function mapsSelector() {

  var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
     (navigator.platform.indexOf("iPad") != -1) ||
     (navigator.platform.indexOf("iPod") != -1))
    window.open(`maps://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`);
  // else if (isMac) {
  //   window.open(`maps://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`,'_self');
  // }
  else {/* else use Google */
    window.open(`https://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`);
  }
}

function addHandlerToDirectionsButton() {
var directionsButton = document.getElementById("directions-button");
directionsButton.onclick = mapsSelector;
}

document.addEventListener("DOMContentLoaded", function() {
  addHandlerToDirectionsButton();
});
