import * as PIXI from "pixi.js-legacy";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new PIXI.Application({
  width: 1000,
  height: 800,
  antialias: true,
  resolution: 1,
});
document.querySelector("#app")?.appendChild(app.view);

let lineNum = 5;
const line = new PIXI.Graphics();
const lineStartX = 100;
for (let index = 0; index < lineNum; index++) {
  // x = 100,300,500,700,900
  // 先畫 直線
  let spaceX = lineStartX + (index * app.screen.width) / lineNum;
  line.lineStyle(5, 0xaaaaaa);
  line.moveTo(spaceX, 0);
  line.lineTo(spaceX, app.screen.height);
  app.stage.addChild(line);
  // 再畫橫線
  // y = 100 260 420 580 740
  let spaceY = lineStartX + (index * app.screen.height) / lineNum;
  console.log(spaceY);

  line.moveTo(lineStartX, spaceY);
  line.lineTo(app.screen.width - lineStartX, spaceY);
  app.stage.addChild(line);
}

const circle = new PIXI.Graphics();
circle.lineStyle(5, 0xaaaaaa);
circle.drawCircle(50, 50, 20);
app.stage.addChild(circle);
