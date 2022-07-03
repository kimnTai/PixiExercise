import * as PIXI from "pixi.js";
import { Power0, TweenMax } from "gsap";

const app = new PIXI.Application({ width: 1200, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader
    .add("line", "../img/FX_Line-2.png")
    .add("line1", "../img/pic_main_line_11.png")
    .add("rope2", "../img/rope2.png")
    .load(() => {});

export { app };
