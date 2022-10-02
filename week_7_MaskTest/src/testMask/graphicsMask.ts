import * as PIXI from "pixi.js-legacy";
import { Application } from "pixi.js-legacy";
import { IMG, SHAPE, SIZE } from "../tools/enum";

/**Graphics 遮罩測試 */
function testGraphicsMask(app: PIXI.Application, loopNum: number = 10): void {
  for (let i = 0; i < loopNum; i++) {
    const background: PIXI.Sprite = PIXI.Sprite.from("背景");
    const graphicsMask: PIXI.Graphics = createGraphics(SHAPE.Circle);
    background.mask = new PIXI.MaskData(graphicsMask);
    background.name = "背景";
    app.stage.addChild(background, graphicsMask);
  }
}

function createGraphics(name: string): PIXI.Graphics {
  const graphics = new PIXI.Graphics();

  graphics.beginFill();
  switch (name) {
    case "Rect":
      graphics.drawRect(0, 0, 1300, 700);
      break;
    case "Circle":
      graphics.drawCircle(1920 / 2, 1080 / 2, 538.34);
      break;
    case "Ellipse":
      graphics.drawEllipse(0, 0, 162, 40.5);
      break;
    case "Polygon":
      const path = [10, 0, 110, 90, 190, 50, 140, 200, 0, 150];
      const newPath = path.map((item, index) => {
        return item;
      });
      graphics.drawPolygon(newPath);
      break;
  }
  graphics.endFill();

  return graphics;
}

export { testGraphicsMask };
