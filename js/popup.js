document.getElementById("btSave").addEventListener("click", save);
document.getElementById("btConfig").addEventListener("click", openConfig);
var randnumb = document.getElementById("numbfield");

//window.open("../batch/openfile.bat")

if (document.cookie != null) {
	randnumb.value = document.cookie.split('=')[1];
}

function save() {
	alert("Settings saved!");
	
	document.cookie = "randnumb=" + randnumb.value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function openConfig() {
	window.open("../js/config.js")
}