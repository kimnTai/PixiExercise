import * as PIXI from "pixi.js-legacy";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

let app = new PIXI.Application({
  width: 512,
  height: 512,
  resolution: 1,
});

document.querySelector("#app")?.appendChild(app.view);

app.loader.add("cat.png", "../images/cat.png").load(setup);

//定義在多個函數中使用的任何變量
let cat: PIXI.Sprite;
function setup() {
  cat = PIXI.Sprite.from("cat.png");
  cat.y = 96;
  app.stage.addChild(cat);
  //開始遊戲循環
  app.ticker.add((delta) => gameLoop(delta));
}
function gameLoop(delta: number) {
  //可以選擇使用 `delta` 值
  cat.x += 1 + delta;
}
