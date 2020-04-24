
var url = "/assets/javascript/reacttalksapp/asset-manifest.json"

fetch(url).then(response => response.json().then(function(data) {
    console.log(data);

    var link = document.createElement( "link" );
    link.href = "/assets/javascript/reacttalksapp/" + data['main.css'];
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild(link);

    var script = document.createElement('script');
    script.src = "/assets/javascript/reacttalksapp/" + data['main.js'];
    document.body.appendChild(script);

  }));