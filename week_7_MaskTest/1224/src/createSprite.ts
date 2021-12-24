import * as PIXI from "pixi.js-legacy";

export function createSprite(app: PIXI.Application) {
  const sprite = PIXI.Sprite.from("../img/sprite.jpeg");
  sprite.x = 200 + Math.random() * (app.screen.width - 300);
  sprite.y = 200 + Math.random() * (app.screen.height - 300);
  sprite.scale.set(0.2);
  let count = 0;
  app.ticker.add(() => {
    sprite.skew.y += 0.03 * Math.random();
    sprite.rotation = count * 0.1;
    count += 0.1;
  });
  return sprite;
}
