import * as PIXI from "pixi.js-legacy";
import { Container } from "pixi.js-legacy";
import { createGraphics } from "./createGraphics";
import { createSprite } from "./createSprite";
import { setStats } from "./setStats";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new PIXI.Application({
  width: 1024,
  height: 768,
});
document.querySelector("#app")?.appendChild(app.view);
let initNumber = 30;
app.loader
  .add("bg", "../img/background.png")
  .add("不規則漸層", "../img/不規則漸層/pic_mg_reelMask.png")
  .add("不規則銳邊", "../img/不規則銳邊/pic_mg_reelMask.png")
  .add("漸層矩形", "../img/漸層矩形/pic_mg_reelMask.png")
  .add("銳邊矩形", "../img/銳邊矩形/pic_mg_reelMask.png")
  .load(() => {
    setStats(app);
    app.stage.name = `容器總數量 ${initNumber}`;
    for (let i = 0; i < initNumber; i++) {
      setContainer(app);
    }
    for (let i = 0; i < 200; i++) {
      const sprite = createSprite(app);
      app.stage.addChild(sprite);
    }
  });

function setContainer(app: PIXI.Application) {
  const container = new Container();
  const graphics = createGraphics(app);
  const sprite = createSprite(app);

  const mask = PIXI.Sprite.from("銳邊矩形");
  mask.name = "遮罩";
  mask.anchor.set(0.5);
  mask.scale.set(app.screen.width / 1920, app.screen.height / 1080);
  mask.position.set(app.screen.width / 2, app.screen.height / 2);
  mask.mask = graphics;

  app.stage.addChild(mask);
}

document.querySelector("#play")?.addEventListener("click", () => {
  setContainer(app);
  initNumber++;
  console.log(`容器總數量 ${initNumber}`);
});
document.querySelector("#remove")?.addEventListener("click", () => {
  app.stage.removeChildren(0);
});
