// Pan function
let f = 0;
let g = 1;
let panSpeed = 20;
let intervalPan;

let imgPan = document.getElementById("img-pan-js");

let pan = function() {
    f++; 
    if (f < 100) {
        g--;
    } if (f > 100 && f< 200) {
        g++;    
    } if (f === 200) {
        g = 1;
        f = 0;
    }
    imgPan.style.left = (g * 2) + "px";
}

imgPan.onmouseover = function () {
    intervalPan = setInterval(pan, panSpeed);
}

imgPan.onmouseout = function () {
    clearInterval(intervalPan)
}