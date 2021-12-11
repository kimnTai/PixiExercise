import { Container, Sprite } from "pixi.js";
import { app } from "./app";

/** 創建圖案 */
export function createSprite(): void {
  const textures = ["one", "two", "three", "four"];
  // 5行
  for (let j = 0; j < 5; j++) {
    const container = new Container();
    // 6 列
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 4);
      const sprite = Sprite.from(textures[random]);
      // 圖片大小 200px 縮成 100px
      sprite.scale.set(100 / 200, 100 / 200);
      sprite.anchor.set(0.5, 0.5);
      // 600 / 5 = 120px，置中 60px
      sprite.x += 120 * j + 60;
      sprite.y += 120 * i + 60 - 120;
      container.addChild(sprite);
    }
    app.stage.addChild(container);
  }
}
