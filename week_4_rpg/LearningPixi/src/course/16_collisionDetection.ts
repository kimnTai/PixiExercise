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
let box: PIXI.Graphics;
function setup() {
  cat = PIXI.Sprite.from("cat.png");
  cat.y = 96;
  box = new PIXI.Graphics();
  box.beginFill(0xccff99);
  box.drawRect(150, 96, 100, 100);

  //Set the game state
  state = play;
  app.stage.addChild(cat, box);
  //開始遊戲循環
  app.ticker.add((delta) => {
    play(delta);
  });
}

function play(delta: number): void {
  //使用貓的速度讓它移動
  cat.x += 1;
  //檢查貓和盒子之間的碰撞
  if (hitTestRectangle(cat, box)) {
    //並將盒子塗成紅色
    box.tint = 0xff3300;
  } else {
    //如果沒有衝突，重置消息
    //文本和框的顏色
    box.tint = 0xccff99;
  }
}

// 碰撞檢測函數
function hitTestRectangle(a: any, b: any) {
  let ab = a.getBounds();
  let bb = b.getBounds();
  return (
    ab.x + ab.width > bb.x &&
    ab.x < bb.x + bb.width &&
    ab.y + ab.height > bb.y &&
    ab.y < bb.y + bb.height
  );
}
