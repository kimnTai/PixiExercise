import { Application, Container, Graphics } from "pixi.js";
import { getRandom } from "./tools";

// 畫直線，放入背景中
function drawStraight(app: Application, background: Container): void {
  const straightLine = new Graphics();
  straightLine.name = "直線";
  let lineNumber = 5;
  for (let i = 0; i < lineNumber; i++) {
    // x = 100,300,500,700,900
    let spaceX = 100 + (i * app.screen.width) / 5;
    straightLine.lineStyle(5, 0xaaaaaa);
    straightLine.moveTo(spaceX, 0);
    straightLine.lineTo(spaceX, app.screen.height * 2);
  }
  background.addChild(straightLine);
}
// 畫橫線，放入背景中
function drawHorizontal(background: Container) {
  const startPoint = background.children[1] as Container;
  const endPoint = background.children[2] as Container;
  const line = new Graphics();
  const color = [0xffc107, 0x0d6efd, 0x198754, 0xfd7e14];
  let lineNumber = 7;
  // 0~50 隨機產生不重複 28 個數字 (4行7列)
  const random: number[] = getRandom(50, 28);
  line.name = "橫線";
  for (let i = 0; i < 4; i++) {
    const lineStartX = 100 + i * 200;
    for (let j = 0; j < lineNumber; j++) {
      const sPoint = new Graphics();
      const ePoint = new Graphics();
      let spaceY = 100 + 30 * random[j + i * lineNumber];
      sPoint.drawCircle(lineStartX, spaceY, 1);
      ePoint.drawCircle(lineStartX + 200, spaceY, 1);
      line.lineStyle(5, color[i]);
      line.moveTo(lineStartX, spaceY);
      line.lineTo(lineStartX + 200, spaceY);
      startPoint.addChild(sPoint);
      endPoint.addChild(ePoint);
      background.addChild(line);
    }
  }
}

// 畫圓
function drawCenter(startX: number, circle: Container) {
  const center = new Graphics();
  const box = new Graphics();
  center.name = "球心";
  center.drawCircle(0, 0, 0.1);
  box.name = "球體";
  box.beginFill(0x0dcaf0);
  box.drawCircle(0, 0, 20);
  circle.addChild(center, box);
  circle.x = startX;
}

export { drawStraight, drawHorizontal, drawCenter };
