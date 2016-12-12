$(".time")[0].style.margin = "200px " + ((window.innerWidth / 2) - ($(".time")[0].offsetWidth / 2)) + "px";

window.onresize = function(event) {
	$(".time")[0].style.margin = "200px " + ((window.innerWidth / 2) - ($(".time")[0].offsetWidth / 2)) + "px";
};