import { Container, DisplayObject } from "pixi.js";

enum State {
  STRAIGHT = 0, // 直走
  RIGHT = 1, // 右轉
  LEFT = 2, // 左轉
}

/**
 * 行走＆轉彎邏輯
 * @param background   背景容器
 * @param circle       球體容器
 */
function howToRun(
  background: Container,
  circle: Container,
  time: number
): void {
  const startPoint = background.children[1] as Container;
  const endPoint = background.children[2] as Container;
  let speed = time;
  switchState(startPoint, endPoint, circle);
  // 如果沒碰點 - 依照狀態前進
  switch (circle.zIndex) {
    case State.RIGHT:
      circle.x += speed * 2;
      break;
    case State.LEFT:
      circle.x -= speed * 2;
      break;
    case State.STRAIGHT:
      if (circle.y < 400) {
        circle.y += speed * 2;
        return;
      } else if (background.y <= -800) {
        circle.y += speed * 2;
      } else {
        background.y -= speed * 2;
      }
      break;
  }
}

// 碰點切換狀態
function switchState(
  startPoint: Container,
  endPoint: Container,
  circle: Container
): void {
  const isStartPoint = startPoint.children.find((item) => {
    return boxesIntersect(circle.children[0], item);
  });
  const isEndPoint = endPoint.children.find((item) => {
    return boxesIntersect(circle.children[0], item);
  });
  // 如果碰到起點
  if (isStartPoint) {
    // 直走 + 起點 = 右轉
    if (circle.zIndex == State.STRAIGHT) {
      circle.zIndex = State.RIGHT;
      // 左轉 + 起點 = 直走
    } else if (circle.zIndex == State.LEFT) {
      circle.zIndex = State.STRAIGHT;
    }
  }
  // 如果碰到終點
  if (isEndPoint) {
    // 右轉 + 終點 = 直走
    if (circle.zIndex == State.RIGHT) {
      circle.zIndex = State.STRAIGHT;
      // 直走 + 終點 = 左轉
    } else if (circle.zIndex == State.STRAIGHT) {
      circle.zIndex = State.LEFT;
    }
  }
}

// 碰撞檢測函數
function boxesIntersect(a: DisplayObject, b: DisplayObject): boolean {
  let ab = a.getBounds();
  let bb = b.getBounds();
  return (
    ab.x + ab.width > bb.x &&
    ab.x < bb.x + bb.width &&
    ab.y + ab.height > bb.y &&
    ab.y < bb.y + bb.height
  );
}

export { howToRun };
