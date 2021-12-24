import * as PIXI from "pixi.js-legacy";
import { Texture, TilingSprite } from "pixi.js-legacy";

function setBackground(app: PIXI.Application) {
  const texture = Texture.from("bg");
  const tilingSprite = new TilingSprite(
    texture,
    app.screen.width,
    app.screen.height
  );
  tilingSprite.scale.set(1280 / app.screen.width, 960 / app.screen.height);
  app.stage.addChild(tilingSprite);
}
