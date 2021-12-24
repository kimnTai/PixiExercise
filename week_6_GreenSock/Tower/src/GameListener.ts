import { Sprite } from "pixi.js-legacy";
import { Runes } from "./Runes";

/**
 * @description 點擊交換珠子顏色
 * @class GameListener
 */
class GameListener {
  private static clickSprite: Sprite | null = null;

  static addClick(runes: Runes) {
    runes.on("click", () => {
      if (this.clickSprite) {
        const org = runes.texture;
        runes.texture = this.clickSprite.texture;
        this.clickSprite.texture = org;
        this.clickSprite.alpha = 1;
        this.clickSprite = null;
      } else {
        console.log("點擊");
        runes.alpha = 0.5;
        this.clickSprite = runes;
      }
    });
  }
}

export { GameListener };
