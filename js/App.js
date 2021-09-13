window.onload = () => {
    fadeInElem(0, document.getElementById("img_me"));
    fadeInElem(0, document.getElementById("my_name"));
    fadeInElem(0, document.getElementById("greeting"));
}

function fadeInElem(opacity, elem) {
    if (opacity < 1) {
        opacity += .1;
        setTimeout(function() {
            fadeInElem(opacity, elem)
        }, 150);
    }
    elem.style.opacity = opacity;
}