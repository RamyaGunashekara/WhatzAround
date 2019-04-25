jQuery(document).ready(function($){
// standard on load code goes here with $ prefix
// note: the $ is setup inside the anonymous function of the ready command
  var myjson;
  var data;
  var i;
  var value="";
  var end;

$.getJSON(
	"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9793842,77.7156149&radius=10000&type=shopping_mall&key=AIzaSyDjITgGsFDW_CmHE5u5CK05teRcbDmxShA",
	 function(json){
	 	myjson=json;
	 	data='{"results":[';
	 	end=myjson.results.length-1;
   		for(i=0;i<myjson.results.length;i++){
   			alert("inside");
   			if(i===end){
   				value=value+
   				'{"name":"'+myjson.results[i].name+'","vicinity":"'+myjson.results[i].vicinity+'","rating":"'+myjson.results[i].rating+'"}';
   			}
   			else{
   			value=value+'{"name":"'+myjson.results[i].name+'","vicinity":"'+myjson.results[i].vicinity+'","rating":"'+myjson.results[i].rating+'"},'; }
   		}  		
   		    data=data+value+"]}";
   		    console.log(data);
});
});
