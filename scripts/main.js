$(document).ready(function() {
console.log("We are connected!");
// Start your scripts here.

$("#btn1").click(function(){
	$("#box1").toggle("hello Josh! You are the best!");
});


// Add a toggle to first element. //

$("btn1").click(function(){
	$("#box1").toggle("box1");
});


// Add a toggle to second group elements. //


$("#btn2").click(function(){
	$("#box2").toggle("fast");
});


$(document.body).click(function() {
	$("div.iterate").each(function(){
		if (this.style.background !== "lightblue") {
			this.style.background = "lightblue";
		} else {
			this.style.background = "";
		}
	});
});















});

