import * as PIXI from "pixi.js-legacy";
import { IMG, SIZE } from "../tools/enum";

/**Sprite 遮罩測試 */
function testSpriteMask(app: PIXI.Application, loopNum: number = 10): void {
  for (let i = 0; i < loopNum; i++) {
    const spriteMask: PIXI.Sprite = createSprite(
      "../../img/銳邊矩形/pic_mg_reelMask.png"
    );
    const background: PIXI.Sprite = PIXI.Sprite.from("背景");
    background.name = "背景";
    background.mask = spriteMask;
    app.stage.addChild(background, spriteMask);
  }
}

function createSprite(name: string): PIXI.Sprite {
  const sprite = PIXI.Sprite.from("../../img/不規則遮罩/bunny.png");
  // sprite.anchor.set(0.5);
  sprite.scale.set(25);
  sprite.name = "遮罩";
  return sprite;
}

export { testSpriteMask };
