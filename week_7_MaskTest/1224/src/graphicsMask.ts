import * as PIXI from "pixi.js-legacy";
import { IMG, SHAPE, SIZE } from "./tools/enum";

/**Graphics 遮罩測試 */
function testGraphicsMask(app: PIXI.Application, loopNum: number = 10): void {
  for (let i = 0; i < loopNum; i++) {
    const background: PIXI.Sprite = PIXI.Sprite.from(IMG.背景);
    const graphicsMask: PIXI.Graphics = createGraphics(SHAPE.Circle);
    background.mask = graphicsMask;
    background.name = "背景";
    app.stage.addChild(background, graphicsMask);
  }
}

function createGraphics(name: string): PIXI.Graphics {
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
  return graphics;
}

export { testGraphicsMask };
