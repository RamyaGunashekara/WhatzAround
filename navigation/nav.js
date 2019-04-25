var lon=null,lat=null,shop_lat=null,shop_lon=null,placeid=null,myjson=null;
var directionsService=null,directionsDisplay=null;

function initGeolocation()
{
   if( navigator.geolocation )
   { 
        // Call getCurrentPosition with success and failure callbacks
      navigator.geolocation.getCurrentPosition( success, fail );
   }
   else
   {
      alert("Sorry, your browser does not support geolocation services.");
   }
}
function initMap() {
        directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);  
        initGeolocation();    
}

function success(position)
{
    placeid=document.getElementById("placeid").value;
    jQuery(document).ready(function($){
    $.getJSON(
    "https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeid+"&key=AIzaSyDjITgGsFDW_CmHE5u5CK05teRcbDmxShA",
    function(json){
      myjson=json;
      shop_lat=myjson.result.geometry.location.lat;
      shop_lon=myjson.result.geometry.location.lng;
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(lat+","+lon);
      console.log(shop_lat+","+shop_lon);
      calculateAndDisplayRoute(directionsService, directionsDisplay);
      while(lon===shop_lon){
        alert("Rate the shop");
        break;
      }
    });
  });
        
}

function fail()
{
   // Could not obtain location
   alert("Sorry, your browser does not support geolocation services.");
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin:lat+","+lon,
          destination:shop_lat+","+shop_lon,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }


      

