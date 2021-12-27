import * as PIXI from "pixi.js-legacy";
import { Container } from "pixi.js-legacy";
import { IMG, SIZE } from "../tools/enum";

/**Sprite 遮罩測試 */
function spriteMaskContainer(
  app: PIXI.Application,
  loopNum: number = 10
): void {
  const background: PIXI.Sprite = PIXI.Sprite.from(IMG.背景);
  const spriteContainer: PIXI.Container = createSprite(IMG.不規則漸層, loopNum);
  background.name = "背景";
  background.mask = spriteContainer;
  app.stage.addChild(spriteContainer, background);
}

function createSprite(name: string, loopNum: number): PIXI.Container {
  const container = new Container();
  for (let i = 0; i < loopNum; i++) {
    const sprite = PIXI.Sprite.from(name);
    const x = Math.random() * SIZE.width;
    const y = Math.random() * SIZE.height;
    sprite.name = "遮罩";
    sprite.scale.set(0.1);
    sprite.anchor.set(0.5);
    sprite.position.set(x, y);
    container.addChild(sprite);
  }
  return container;
}
