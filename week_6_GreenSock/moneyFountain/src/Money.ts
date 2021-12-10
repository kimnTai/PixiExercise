import { Sprite, Texture } from "pixi.js-legacy";

/**金錢 Sprite */
class Money extends Sprite {
  /**45 ~ 135度 */
  direction = ((45 + Math.random() * 90) * Math.PI) / 180;

  /** X 方向 4 - 12 之間的隨機速度 */
  speedX = (4 + Math.random() * 10) * -1;
  /** 向上初速度 30 */
  speedY = 30 * -1;

  constructor() {
    super();
    this.texture = Texture.from("../img/money.png");
    this.anchor.set(0.5);
  }
}

export { Money };
