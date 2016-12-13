sp = cfg.timerSeperator;

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
	
	if (cfg.timerShowSeconds) {
		document.getElementById("time").innerHTML = h + sp + m + sp + s;
		document.getElementById("timeTitle").innerHTML = h + sp + m + sp + s + " - New Tab";
	} else {
		document.getElementById("time").innerHTML = h + sp + m;
		document.getElementById("timeTitle").innerHTML = h + sp + m + " - New Tab";
	}
	
    t = setTimeout(function () {
        startTime()
    }, 500);
}

startTime();



