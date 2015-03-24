var map;
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(50.399637,30.614102)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);