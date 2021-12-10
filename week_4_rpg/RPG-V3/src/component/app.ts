import { Application } from "pixi.js";
import { CreateButton } from "./createButton";
import { background } from "./background";
import { CreateText } from "./createText";

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
    .add("background.png", "../img/background.png")
    .add("character.png", "../img/character.png")
    .add("speed.png", "../img/speed.png")
    .add("../img/spritesheet.json")
    .load(() => {
      background(app);
      new CreateButton(app);
      new CreateText(app);
    });
}

export { app, pixiInit };
