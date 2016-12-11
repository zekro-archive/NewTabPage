var img = document.getElementById("bgimage");

if (document.cookie.split('randnumb=')[1] != null) {
	var maxRandValue = document.cookie.split('=')[1];
} else {
	var maxRandValue = 1;
}
var rand = Math.floor((Math.random() * maxRandValue) + 1);


img.src = "../pics/(" + rand + ").jpg";

img.width = window.innerWidth;

window.onresize = function(event) {
	img.width = window.innerWidth;
}