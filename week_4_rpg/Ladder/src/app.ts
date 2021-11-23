import { Application, Container } from "pixi.js";
import { howToRun } from "./bump";
import { drawStraight, drawHorizontal, drawCenter } from "./draw";

function init(): void {
  const app = new Application({
    width: 1000,
    height: 800,
    antialias: true,
    resolution: 1,
  });
  document.querySelector("#app")?.appendChild(app.view);

  const background = new Container();
  const startPoint = new Container();
  const endPoint = new Container();
  const circle = new Container();
  let startX = 100;
  startPoint.name = "起點";
  endPoint.name = "終點";
  circle.name = "球容器";
  background.addChild(startPoint, endPoint);
  app.stage.addChild(background, circle);

  // 畫直線
  drawStraight(app, background);
  // 畫橫線
  drawHorizontal(background);
  // 畫圓 (起始X,容器)
  drawCenter(startX, circle);

  app.ticker.add((time) => {
    // 如果超出螢幕回原點
    if (circle.y >= app.screen.height) {
      // 使每次起點不相同
      startX += 200;
      if (startX > app.screen.width) {
        startX = 100;
      }
      background.y = 0;
      circle.x = startX;
      circle.y = 0;
    }
    howToRun(background, circle, time);
  });
}

init();
