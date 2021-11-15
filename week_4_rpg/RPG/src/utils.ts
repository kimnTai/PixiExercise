import * as PIXI from "pixi.js-legacy";
import { app } from "./app";

// 不能用
// Uncaught ReferenceError: Cannot access '' before initialization
export function createSprite(num: number) {
  let path: string = "";
  switch (num) {
    case 0:
      path = "../img/Knight.png";
      break;
    case 1:
      path = "../img/Thieves.png";
      break;
    case 2:
      path = "../img/Wizard.png";
      break;
  }
  const spr = PIXI.Sprite.from(path);
  app.stage.addChild(spr);
}
