import { Sprite } from "pixi.js-legacy";
import { app } from ".";

/**背景設置 */
function background(): void {
  const background = Sprite.from("background.png");
  const background_2 = Sprite.from("background.png");
  background.width = background_2.width = app.screen.width;
  background.height = background_2.height = app.screen.height;
  background_2.x = -app.screen.width;
  app.ticker.add((time) => {
    if (background.x >= app.screen.width) {
      background.x = -app.screen.width;
    }
    if (background_2.x >= app.screen.width) {
      background_2.x = -app.screen.width;
    }
    background.x += 1;
    background_2.x += 1;
  });
  app.stage.addChild(background, background_2);
}

export { background };
