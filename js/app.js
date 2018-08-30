var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

$(function() {
    $('#carouselExampleIndicators').carousel({
        interval: 2000000
    });

});
}
if (window.innerWidth < 400) {
    $('#youtube').attr("width", "250");
    $('#youtube').attr("height", "100");

if (window.innerWidth < 800) {
    $('#youtube').attr("height", "280");
    $('#youtube').attr("width", "380");
}
if (window.innerWidth > 960) {
    $('#youtube').attr("width", "600");
    $('#youtube').attr("height", "450");
}
