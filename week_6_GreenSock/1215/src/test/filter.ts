import * as PIXI from "pixi.js-legacy";
import { Application } from "pixi.js-legacy";

function filter(app: Application): void {
  const littleRobot = PIXI.Sprite.from("../../img/depth_blur_moby.jpg");
  const blurFilter = new PIXI.filters.BlurFilter();
  blurFilter.blur = 0;
  littleRobot.position.set(200, 100);
  littleRobot.filters = [blurFilter];

  let count = 0;
  app.ticker.add(() => {
    count += 0.05;
    //blurFilter2.blur = 20 * blurAmount2;
    blurFilter.blur += 3;
  });
  app.stage.addChild(littleRobot);
}
