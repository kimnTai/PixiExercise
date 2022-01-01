import * as PIXI from "pixi.js-legacy";
import resize from "./resize";
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
  .add("背景", "../img/slot/bg_final.webp")
  .load(setup)
  .load(button);
window.addEventListener("resize", () => {
  resize(app);
});

function setup(): void {
  const { stage } = app;
  const background = PIXI.Sprite.from("背景");
  const container = new PIXI.Container();
  container.position.set(390, 380);
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * dataArray.length);
      const symbol = PIXI.Sprite.from(dataArray[random]);
      symbol.anchor.set(0.5);
      symbol.position.set(j * 180, i * 156);
      container.addChild(symbol);
    }
  }
  const mask = new PIXI.Graphics();
  mask.drawRect(280, 290, 920, 470);
  container.mask = mask;
  stage.addChild(background, container, mask);
}

function button(): void {
  const sprite = PIXI.Sprite.from("btn_active.png");
  sprite.position.set(750, 820);
  sprite.anchor.set(0.5);
  sprite.buttonMode = true;
  sprite.interactive = true;
  sprite.on("click", () => {
    sprite.texture = PIXI.Texture.from("btn_inactive.png");
  });
  app.stage.addChild(sprite);
}
