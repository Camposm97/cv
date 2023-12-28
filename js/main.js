import App from "./App.js";
import BackgroundManager from "./circuits/BackgroundManager.js";

const bgm = new BackgroundManager();
bgm.start();

// window.onload = () => {
    let app = new App();
    app.launch();
// }