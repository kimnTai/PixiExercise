import { Application } from "pixi.js";
import { createButton } from "./createButton";
import { createSprite } from "./createSprite";
import { createTop } from "./createTop";

let app: Application;

/**PIXI app 初始化 */
function createApp(): void {
  app = new Application({
    width: 600,
    height: 600,
    antialias: true,
    resolution: 1,
    backgroundColor: 0x08294a,
  });
  document.querySelector("#app").appendChild(app.view);
  app.loader
    .add("one", "../img/one.png")
    .add("two", "../img/two.png")
    .add("three", "../img/three.png")
    .add("four", "../img/four.png")
    .load(createSprite)
    .load(createTop)
    .load(createButton);
}

export { createApp, app };
