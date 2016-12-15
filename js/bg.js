var img = document.getElementById("bgimage");

if (localStorage.randnumb != null) {
	var maxRandValue = localStorage.randnumb;
} else {
	var maxRandValue = 1;
}
var rand = Math.floor((Math.random() * maxRandValue) + 1);


img.src = "../pics/(" + rand + ").jpg";

img.width = window.innerWidth;

window.onresize = function(event) {
	img.width = window.innerWidth;
}