// 直線
const straightLine = new PIXI.Graphics();
for (let i = 0; i < 2; i++) {
  // x = 100,300,500,700,900
  let spaceX = 100 + (i * app.screen.width) / 5;
  straightLine.lineStyle(5, 0xaaaaaa);
  straightLine.moveTo(spaceX, 0);
  straightLine.lineTo(spaceX, app.screen.height);
  app.stage.addChild(straightLine);
}

let startPoints = [];
let endPoints = [];

for (let i = 0; i < 2; i++) {
  const line = new PIXI.Graphics();
  let spaceY = 100 + (i * app.screen.width) / 5;
  line.lineStyle(5, 0xffc107);
  line.moveTo(100, spaceY);
  line.lineTo(300, spaceY);
  startPoints.push({
    x: line.currentPath.points[0],
    y: line.currentPath.points[1],
  });
  endPoints.push({
    x: line.currentPath.points[2],
    y: line.currentPath.points[3],
  });
  app.stage.addChild(line);
}

class Point extends PIXI.Point {
  state: string = State.STRAIGHT;
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }
}

enum State {
  STRAIGHT = "直線", // 直線
  RIGHT = "右轉", // 右轉
  LEFT = "左轉", // 左轉
}

const point = new Point(100, 0);
while (point.y <= app.screen.height) {
  point.y += 1;
  let isStart = startPoints.find((item) => {
    return item.x == point.x && item.y == point.y;
  });
  if (isStart) {
    console.log(isStart);
  }
}
