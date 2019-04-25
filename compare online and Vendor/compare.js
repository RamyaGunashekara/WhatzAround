  $(document).ready(function(){
function setDate(){
	var fiveDaysLater = new Date(0,0,0,0,0,0,Date.now() + 5 * 24 * 60 * 60 * 1000);
	document.getElementById("name").innerHTML  = fiveDaysLater;
	console.log(fiveDaysLater);
}
setDate();
});