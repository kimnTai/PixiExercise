import { removeItems } from "@pixi/utils";
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
for (let i = 0; i < 5; i++) {
  // x = 100,300,500,700,900
  let spaceX = lineStartX + (i * app.screen.width) / 5;
  line.lineStyle(5, 0xaaaaaa);
  line.moveTo(spaceX, 0);
  line.lineTo(spaceX, app.screen.height);
  app.stage.addChild(line);
}

// 再畫橫線
for (let i = 0; i < lineNum; i++) {
  // y = 100 260 420 580 740
  let spaceY = lineStartX + (i * app.screen.height) / lineNum;

  line.lineStyle(5, color[0]);
  line.moveTo(lineStartX, spaceY); // (100,100)
  line.lineTo(300, spaceY);
  point.push(
    {
      x: line.currentPath.points[0],
      y: line.currentPath.points[1],
    },
    {
      x: line.currentPath.points[2],
      y: line.currentPath.points[3],
    }
  );

  spaceY -= 50;
  line.lineStyle(5, color[1]);
  line.moveTo(lineStartX + 200, spaceY); // (100,100)
  line.lineTo(500, spaceY);

  point.push(
    {
      x: line.currentPath.points[0],
      y: line.currentPath.points[1],
    },
    {
      x: line.currentPath.points[2],
      y: line.currentPath.points[3],
    }
  );

  app.stage.addChild(line);
}

//console.log(point);

const circle = new PIXI.Graphics();
circle.beginFill(0x0dcaf0);
circle.drawCircle(0, 0, 20);
circle.x = 100;

app.ticker.add((time) => {
  circleTurn(circle, time * 2);
});

app.stage.addChild(circle);

function circleTurn(circle: PIXI.Container, time: number) {
  if (circle.y >= app.screen.height) {
    circle.x = 100;
    circle.y = 0;
  }
  // (100,100) 右轉
  if (circle.y >= 100 && circle.y < 210 && circle.x <= 300) {
    circle.x += time;
    circle.y += 0;
    // (300,210) 右轉
  } else if (circle.y >= 210 && circle.y < 370 && circle.x <= 500) {
    circle.x += time;
    circle.y += 0;
    // (300,370) 左轉
  } else if (circle.y >= 370 && circle.y < 530 && circle.x >= 300) {
    circle.x -= time;
    circle.y += 0;
    // (300,420) 左轉
  } else if (circle.y >= 420 && circle.y < 530 && circle.x >= 100) {
    circle.x -= time;
    circle.y += 0;
  } else if (circle.y >= 580 && circle.y < 670 && circle.x <= 300) {
    circle.x += time;
    circle.y += 0;
  } else if (
    circle.y >= 690 &&
    circle.y < app.screen.height &&
    circle.x <= 500
  ) {
    circle.x += time;
    circle.y += 0;
  } else {
    circle.y += time;
  }
}

interface startPoint {
  x: number;
  y: number;
}

const newPoint: any[] = [];
function calculate(start: startPoint, point: startPoint[]) {
  for (let i = 0; i <= 800; i++) {
    start.y++;
    point.filter((item, index, array) => {
      const bol = item.y == start.y;
      if (item.x == start.x && bol) {
        newPoint.push(item);
      }
      return bol;
    });
    if (newPoint.length > 0) {
      point.filter((item) => {
        const bol =
          item.x + 200 == newPoint[0].x || item.x - 200 == newPoint[0].x;
        if (bol && item.y == start.y) {
          newPoint.push(item);
        }
      });
      return;
    }
  }
}
console.log(newPoint);
const test = {
  x: 100,
  y: 0,
};
calculate(test, point);

