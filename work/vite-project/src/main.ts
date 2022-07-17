import * as PIXI from "pixi.js";
import Dragger from "./dragger";

const app = new PIXI.Application({ width: 1200, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader.load(setup);

function setup() {
    const graphics = new Dragger();

    app.stage.addChild(graphics);
}

function debounce(callback: Function, delay = 1000) {
    let timeout = 0;
    return (...args: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), delay);
    };
}

function throotle(callback: Function, delay = 1000) {
    let shouldWait = false;
    return (...args: any) => {
        if (shouldWait) return;
        callback(...args);
        shouldWait = true;
        setTimeout(() => (shouldWait = false), delay);
    };
}
