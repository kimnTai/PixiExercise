import { Sprite } from "pixi.js-legacy";

class Runes extends Sprite {
  removeGroundId!: number;
  dragging: boolean = false;
  speedY = 0;
}

export { Runes };
