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

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  alert('Query Variable ' + variable + ' not found');
}

function success(position)
{
    placeid = getQueryVariable('placeid');
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
      var myFrame = $('.myiframe');
	    var url = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDjITgGsFDW_CmHE5u5CK05teRcbDmxShA&origin="+lat+","+lon+"&destination="+shop_lat+","+shop_lon+"&avoid=tolls|highways";
	    $(myFrame).attr('src', url);
       while(lon===shop_lon){
        window.location="Ragu.html?name="+myjson.result.name;
        //alert("name:"+myjson.result.name);
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
  jQuery(document).ready(function($){ 
  	initGeolocation();
});