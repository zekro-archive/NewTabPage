document.getElementById("btSave").addEventListener("click", save);
var randnumb = document.getElementById("numbfield");

//alert(document.cookie.split('randnumb=')[1]);

if (document.cookie != null) {
	randnumb.value = document.cookie.split('randnumb=')[1];
}

function save() {
	alert("Settings saved!");
	
	document.cookie = "randnumb=" + randnumb.value;
	
}