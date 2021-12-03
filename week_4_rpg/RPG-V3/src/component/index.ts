import { Application } from "pixi.js";
import { attButton } from "./attButton";
import { background } from "./background";
import { createRace, logText } from "./textLog";

let app!: Application;

/**PIXI 初始化加載所有內容 */
function pixiInit(): void {
  app = new Application({
    width: 800,
    height: 400,
    antialias: true,
    resolution: 1,
  });
  document.querySelector("#app")?.appendChild(app.view);
  // 加載
  app.loader
    .add("attack.png", "../img/attack.png")
    .add("attack_black.png", "../img/attack_black.png")
    .add("background.png", "../img/background.png")
    .add("Knight.png", "../img/Knight.png")
    .add("Thieves.png", "../img/Thieves.png")
    .add("Wizard.png", "../img/Wizard.png")
    .load(background)
    .load(attButton)
    .load(logText)
    .load(createRace);
}

export { app, pixiInit };
