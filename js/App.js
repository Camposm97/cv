window.onload = () => {
    let elems = document.getElementsByClassName("fade_in");
    for (let i = 0; i < elems.length; i++) {
        fadeInElem(0, elems[i]);
    }
    elems = document.getElementById("nav_bar").children;
    for (let i = 0; i < elems.length; i++) {
        elems[i].onmouseover = (ev) => {
            elems[i].style.color = "lime";
        };
        elems[i].onmouseout = (ev) => {
            elems[i].style = "";
        };
    }

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