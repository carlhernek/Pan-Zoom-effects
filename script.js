// Zoom function
let i = 0;
let j = 1;
let speed = 10;
let intervalZoom;

let imgZoom = document.getElementById("img-zoom-js");

let zoom = function() {
    i++; 
    if (i < 100) {
        j = j + 0.005;
    } if (i > 100 && i < 200) {
        j = j - 0.005;
    } if (i === 200) {
        j = 1;
        i = 0;
    }
    imgZoom.style.transform = "scale(" + j + ")";
}

imgZoom.onmouseover = function () {
    intervalZoom = setInterval(zoom, speed);
}

imgZoom.onmouseout = function () {
    clearInterval(intervalZoom)
}