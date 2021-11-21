import * as PIXI from "pixi.js-legacy";

interface startPoint {
  x: number;
  y: number;
}

function calculate(start: startPoint, point: startPoint[]) {
  const newPoint: any[] = [];
  for (let i = 0; i <= 800; i++) {
    start.y++;
    const findPoint = point.filter((item, index, array) => {
      if (item.x == start.x && item.y == start.y) {
        newPoint.push(item);
      }
      return item.y == start.y;
    });
    if (newPoint.length > 0) {
      return;
    }
  }
  console.log(newPoint);
}
const test = {
  x: 100,
  y: 0,
};
//calculate(test, point);
