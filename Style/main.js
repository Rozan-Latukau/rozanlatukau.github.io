var i = 0;
var images = [];
var time = 3000;

// images list
images[0] = 'Asset/logo3.png';
images[1] = 'Asset/logo4.png';

// change images
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;