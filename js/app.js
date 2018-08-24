//Show a modal when the page loads
$("#fotos").click(function() {
    $('#myModal').modal('show');
});

$("#videos").click(function() {
    $('#myModal1').modal('show');
});

if (window.innerWidth < 645) {
    $('#fotos').removeClass('invisible');
}

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