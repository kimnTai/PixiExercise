import * as PIXI from "pixi.js-legacy";
import { IMG, SIZE } from "./tools/enum";

/**Sprite 遮罩測試 */
function testSpriteMask(app: PIXI.Application, loopNum: number = 10): void {
  for (let i = 0; i < loopNum; i++) {
    const background: PIXI.Sprite = PIXI.Sprite.from(IMG.背景);
    const spriteMask: PIXI.Sprite = createSprite(IMG.不規則銳邊);
    background.name = "背景";
    background.mask = spriteMask;
    app.stage.addChild(spriteMask, background);
  }
}

function createSprite(name: string): PIXI.Sprite {
  const sprite = PIXI.Sprite.from(name);
  const x = Math.random() * SIZE.width;
  const y = Math.random() * SIZE.height;
  sprite.name = "遮罩";
  sprite.scale.set(0.1);
  sprite.anchor.set(0.5);
  sprite.position.set(x, y);
  return sprite;
}

export { testSpriteMask };
