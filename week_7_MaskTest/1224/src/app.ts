import * as PIXI from "pixi.js-legacy";
import { dataArray } from "./tools/data";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new PIXI.Application({
  width: 1920,
  height: 1080,
});
document.querySelector("#app")?.appendChild(app.view);
app.loader
  .add("../img/slot/spritesheet.json")
  .add("mask", "../img/銳邊矩形/pic_mg_reelMask.png")
  .add("背景", "../img/slot/bg_final.png")
  .load(setup);

function setup(): void {
  const { stage } = app;
  const background = PIXI.Sprite.from("背景");
  const mask = new PIXI.Graphics();
  mask.drawRect(280, 290, 700, 467);
  const container = new PIXI.Container();
  container.position.set(280, 290);
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 4; i++) {
      const random = Math.round(Math.random() * dataArray.length);
      const symbol = PIXI.Sprite.from(dataArray[random]);
      symbol.position.set(j * 158, i * 150);
      symbol.anchor.set(0.5);
      container.addChild(symbol);
    }
  }
  container.mask = mask;
  stage.addChild(background, container, mask);
}
