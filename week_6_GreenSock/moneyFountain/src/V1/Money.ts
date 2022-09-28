import { Sprite, Texture } from "pixi.js";

/**金錢 Sprite */
class Money extends Sprite {
  constructor() {
    super();
    this.texture = Texture.from("../img/money.png");
    this.anchor.set(0.5);
    this.skew.set(Math.random(), Math.random());
    this.rotation = Math.random() * Math.PI * 2;
  }
  /** 重力設置 (默認 9.8 / 30) */
  gravity = 9.8 / 30;
  /** X 方向速度 */
  speedX: number = 1;
  /** Y 方向終端速度 */
  endSpeedY: number;
  /**默認方向垂直向上 */
  private _direction: number = 1.57;
  private _speedY: number = 1;

  /** Y 方向速度 */
  set speedY(speed: number) {
    this._speedY = speed;
  }
  get speedY() {
    this._speedY += this.gravity;
    if (this._speedY > this.endSpeedY) {
      this._speedY = this.endSpeedY;
    }
    return this._speedY;
  }

  /**設置張角 (度) */
  get direction() {
    return this._direction;
  }
  set direction(angle: number) {
    const count = 90 - angle / 2;
    this._direction = ((count + Math.random() * angle) * Math.PI) / 180;
  }

  /**X 方向位移量 */
  get computeX() {
    // 位移量 = 向量 * 單位時間速度
    return Math.cos(this.direction) * this.speedX;
  }
  /**Y 方向位移量 */
  get computeY() {
    return Math.sin(this.direction) * this.speedY;
  }
}

export { Money };
