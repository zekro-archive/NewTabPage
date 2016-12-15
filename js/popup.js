var s = localStorage;

document.getElementById("btSave").addEventListener("click", save);

var randnumb = document.getElementById("numbfield");
//var bgopacity = document.getElementById("bgopacity");
//var fontSize = document.getElementById("fontSize");

randnumb.value = s["randnumb"];
bgopacity.value = s["bgopacity"];
fontSize.value = s["fontSize"];
fontColor.value = s["fontColor"];
borderThickness.value = s["borderThickness"];
borderColor.value = s["borderColor"];

if (s["timerSeconds"] == "true")
	timerSeconds.checked = true;
else
	timerSeconds.checked = false;

//alert(s["timerSeconds"]);


function save() {
	s["randnumb"] = randnumb.value;
	s["bgopacity"] = bgopacity.value;
	s["fontSize"] = fontSize.value;
	s["timerSeconds"] = timerSeconds.checked;
	s["fontColor"] = fontColor.value;
	s["borderThickness"] = borderThickness.value;
	s["borderColor"] = borderColor.value;
}