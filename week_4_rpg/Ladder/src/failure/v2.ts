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
// 橫線
const startPoint = new PIXI.Container();
startPoint.name = "startPoint";
const endPoint = new PIXI.Container();
endPoint.name = "endPoint";
for (let i = 0; i < 2; i++) {
  const line = new PIXI.Graphics();
  const sPoint = new PIXI.Graphics();
  const ePoint = new PIXI.Graphics();
  let spaceY = 100 + (i * app.screen.width) / 5;
  sPoint.drawCircle(100, spaceY, 1);
  ePoint.drawCircle(300, spaceY, 1);
  line.lineStyle(5, 0xffc107);
  line.moveTo(100, spaceY);
  line.lineTo(300, spaceY);
  startPoint.addChild(sPoint);
  endPoint.addChild(ePoint);
  app.stage.addChild(line);
}
app.stage.addChild(startPoint, endPoint);

const container = new PIXI.Container();
const circle = new PIXI.Graphics();
circle.drawCircle(0, 0, 1);
const circleBox = new PIXI.Graphics();
circleBox.beginFill(0x0dcaf0);
circleBox.drawCircle(0, 0, 20);
container.addChild(circle, circleBox);
container.x = 300;

app.stage.addChild(container);

app.ticker.add((time) => {
  time = time * 2;
  // 如果超出螢幕
  if (container.y >= app.screen.height) {
    container.x = 100;
    container.y = 0;
  }
  const isStartPoint = startPoint.children.find((item) => {
    return boxesIntersect(circle, item);
  });
  const isEndPoint = endPoint.children.find((item) => {
    return boxesIntersect(circle, item);
  });
  if (isStartPoint) {
    // 直走 + 起點 = 右轉
    if (container.zIndex == State.STRAIGHT) {
      container.zIndex = State.RIGHT;
      // 左轉 + 起點 = 直走
    } else if (container.zIndex == State.LEFT) {
      container.zIndex = State.STRAIGHT;
    }
  }

  if (isEndPoint) {
    // 右轉 + 終點 = 直走
    if (container.zIndex == State.RIGHT) {
      container.zIndex = State.STRAIGHT;
      // 直走 + 終點 = 左轉
    } else if (container.zIndex == State.STRAIGHT) {
      container.zIndex = State.LEFT;
    }
  }

  if (container.zIndex == State.STRAIGHT) {
    container.y += time;
  } else if (container.zIndex == State.RIGHT) {
    container.x += time;
  } else if (container.zIndex == State.LEFT) {
    container.x -= time;
  }
});

// 碰撞檢測函數
function boxesIntersect(a: any, b: any) {
  let ab = a.getBounds();
  let bb = b.getBounds();
  return (
    // 都加等於試試
    ab.x + ab.width > bb.x &&
    ab.x < bb.x + bb.width &&
    ab.y + ab.height > bb.y &&
    ab.y < bb.y + bb.height
  );
}

enum State {
  STRAIGHT = 0, // 直線
  RIGHT = 1, // 右轉
  LEFT = 2, // 左轉
}
