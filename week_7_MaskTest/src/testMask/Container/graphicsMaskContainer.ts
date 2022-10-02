import * as PIXI from "pixi.js-legacy";
import { Container } from "pixi.js-legacy";
import { IMG, SHAPE, SIZE } from "../../tools/enum";

/**Graphics 遮罩容器版 - 測試  */
function graphicsMaskContainer(
  app: PIXI.Application,
  loopNum: number = 10
): void {
  const background: PIXI.Sprite = PIXI.Sprite.from("背景");
  const container: PIXI.Container = createGraphicsContainer(
    SHAPE.Circle,
    loopNum
  );
  background.name = "背景";
  background.mask = container;
  app.stage.addChild(background, container);
}

function createGraphicsContainer(
  name: string,
  loopNum: number
): PIXI.Container {
  const container = new Container();
  for (let i = 0; i < loopNum; i++) {
    const graphics = new PIXI.Graphics();
    const x = Math.random() * SIZE.width;
    const y = Math.random() * SIZE.height;
    graphics.beginFill();
    switch (name) {
      case "Rect":
        graphics.drawRect(x, y, 192, 108);
        break;
      case "Circle":
        graphics.drawCircle(x, y, 81);
        break;
      case "Ellipse":
        graphics.drawEllipse(x, y, 162, 40.5);
        break;
    }
    container.addChild(graphics);
  }
  return container;
}

export { graphicsMaskContainer };
