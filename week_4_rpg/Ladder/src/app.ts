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
const color = [0xffc107, 0x0d6efd, 0x198754, 0xfd7e14];

const point: unknown[] = [];
// 先畫 直線
for (let i = 0; i < lineNum; i++) {
  // x = 100,300,500,700,900
  let spaceX = lineStartX + (i * app.screen.width) / lineNum;
  line.lineStyle(5, 0xaaaaaa);
  line.moveTo(spaceX, 0);
  line.lineTo(spaceX, app.screen.height);
  let obj = {
    x: spaceX,
    y: app.screen.height,
  };
  app.stage.addChild(line);
  point.push(obj);
}
//console.log(point);

// 再畫橫線
for (let i = 0; i < lineNum; i++) {
  // y = 100 260 420 580 740
  let spaceY = lineStartX + (i * app.screen.height) / lineNum;

  line.lineStyle(5, color[0]);
  line.moveTo(lineStartX, spaceY); // (100,100)
  line.lineTo(300, spaceY);

  spaceY -= 50;
  line.lineStyle(5, color[1]);
  line.moveTo(lineStartX + 200, spaceY); // (100,100)
  line.lineTo(500, spaceY);
  app.stage.addChild(line);
}

const circle = new PIXI.Graphics();
circle.beginFill(0x0dcaf0);
circle.drawCircle(100, 0, 20);

app.ticker.add((time) => {
  circle.y += time;
  if (circle.y >= app.screen.height) {
    app.ticker.stop();
  }
});

app.stage.addChild(circle);
