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
let state;
function setup() {
  cat = PIXI.Sprite.from("cat.png");
  cat.y = 96;

  //Set the game state
  state = play;

  app.stage.addChild(cat);
  //開始遊戲循環
  app.ticker.add((delta) => gameLoop(delta));
}
function gameLoop(delta: number) {
  //可以選擇使用 `delta` 值
  cat.x += delta;
}
function play(delta: number) {
  //Move the cat 1 pixel to the right each frame

  cat.x += 1;
}
