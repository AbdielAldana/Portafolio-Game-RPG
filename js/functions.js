// $( "#target" ).mousemove(function( event ) {
//     var msg = "Handler for .mousemove() called at "
//     msg += event.pageX + ", " + event.pageY
//     $( "#log" ).text( "<div>" + msg + "</div>" )
// })

// ------------------------------------------------------------------
// Variables Globales
var windowHeight = 0
var windowWidth = 0

var totalTilesHeight = 0
var totalTilesWidth = 0


var timeMove = 40
var statusTimeMove = false

// area.js
var orillasWidth = 1
var x = 10

var GridOrillas = 0

// Modals
var modalOpen = true

// ------------------------------------------------------------------
// motion.js
var pane = $('#capa2')
var box = $('#box')
var wh = (64 * (totalTilesWidth - (orillasWidth * 2))) - box.width()
var wv = (64 * (totalTilesHeight - 2)) - box.height()
var d = {}
var step = 0
// ------------------------------------------------------------------
// Bloquea el Click Izquierdo
document.oncontextmenu = function () {
	return false
}

// ------------------------------------------------------------------
// Pone la pantalla en Pantalla Completa
$(document).keydown(function (e) {
	if (e.which === 80) {
		toggleFullScreen();
	}
	if (e.which === 69 && modalOpen) closeModalText();
	if (e.which === 16) x = 15;
	if (e.which === 87 || e.which === 65 || e.which === 83 || e.which === 68 || !statusTimeMove || d['87'] || d['65'] || d['83'] || d['68']) {
		statusTimeMove = true
	}
});
$(document).keyup(function (e) {
	if (e.which === 16) {
		x = 10
	}
	if (e.which === 87 || e.which === 65 || e.which === 83 || e.which === 68) {
		if (!d['87'] && !d['65'] && !d['83'] && !d['68']) {
			statusTimeMove = false
		}
	}
});

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}

setInterval(() => {
	var hoy = new Date();
	var num = hoy.getHours()
	var status = 1
	if (num >= 7 && num <= 20) {
		status = 1
	} else {
		status = .5
	}

	$(".setCapa2").css("filter", "brightness(" + status + ")")
	$(".setCapa0").css("filter", "brightness(" + status + ")")
}, 600000);

$(document).ready(function () {
	var hoy = new Date();
	var num = hoy.getHours()
	var status = 1
	if (num >= 7 && num <= 20) {
		status = 1
	} else {
		status = .5
	}

	$(".setCapa3").css("filter", "brightness(" + status + ")")
	$(".setCapa2").css("filter", "brightness(" + status + ")")
	$(".setCapa0").css("filter", "brightness(" + status + ")")
})


// --------------------------------------------------------------------

function medidaZoom(coor, pageC) {
	var width1 = 1600;
	var height1 = 900;
	var windowWidth12 = $(window).width();
	var windowHeight12 = $(window).height();
	var r2 = Math.min(windowWidth12 / width1, windowHeight12 / height1)
	var width = $("#resize").width() * r2;
	var height = $("#resize").height() * r2;
	var w = Math.ceil(($(window).width() - width) / 2)
	var h = Math.ceil(($(window).height() - height) / 2)

	if (coor === "x") {
		return Math.ceil((((pageC - w) * 100) / r2) / 100)
	}
	if (coor === "y") {
		return Math.ceil((((pageC - h) * 100) / r2) / 100)
	}
}

// $(".entorno").mouseenter(function () {
	// $(".entorno").mousemove(function (event) {
	// 	var pageCoords = "( " +
	// 		medidaZoom("x", event.pageX) +
	// 		", " +
	// 		medidaZoom("y", event.pageY) +
	// 		" )";
	// 	var pageCoords2 = "( " +
	// 		event.pageX +
	// 		", " +
	// 		event.pageY +
	// 		" )";
	// 	$(".cursorxD").css({
	// 		left: medidaZoom("x", event.pageX) + "px",
	// 		top: medidaZoom("y", event.pageY) + "px"
	// 	})
	// 	$(".asd1").first().text("( event.pageX, event.pageY ) : " + pageCoords);
	// 	$(".asd2").first().text("( event.pageX, event.pageY ) : " + pageCoords2);
	// })
	// })

// if(mouse){
//   console.log(3)
//   $( ".scalable" ).mousemove(function( event ) {
//     console.log(event.pageX, event.pageY)
//     console.log(event.clientX, event.clientY)
//   })
// }