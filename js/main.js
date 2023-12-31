import App from "./App.js";
// import BackgroundManager from "./circuits/BackgroundManager.js";

// const bgm = new BackgroundManager();
// bgm.start();
const app = new App();
app.launch();

window.onload = () => {
    let loaderWrapper = document.querySelector('.loader-wrapper')
    if (loaderWrapper) {
        loaderWrapper.style.transition = 'opacity 0.5s'
        loaderWrapper.style.opacity = '0'
        setTimeout(function() {
            loaderWrapper.style.display = 'none'
        }, 500)
    }
}