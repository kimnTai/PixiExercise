import * as PIXI from "pixi.js";
import { CreateButton } from "./component/createButton";
import { background } from "./component/background";
import { CreateText } from "./component/createText";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

let app!: PIXI.Application;

/**PIXI 初始化加載所有內容 */
function init(): void {
  app = new PIXI.Application({
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

init();
export { app, init };
