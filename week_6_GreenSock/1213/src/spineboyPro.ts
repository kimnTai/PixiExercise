import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js-legacy";
import { app } from "./app";

export function spineboyPro(loader: PIXI.Loader, res: any): void {
  const spineBoyPro = new Spine(res.spineboypro.spineData);
  spineBoyPro.position.set(app.screen.width / 2, app.screen.height);
  spineBoyPro.scale.set(0.5);
  app.stage.addChild(spineBoyPro);

  // 只做一次的動畫
  const singleAnimations = ["aim", "death", "jump", "portal"];
  // 會重複的動畫
  const loopAnimations = ["hoverboard", "idle", "run", "shoot", "walk"];
  // 所有的動畫
  const allAnimations = [].concat(singleAnimations, loopAnimations);

  app.stage.on("pointerdown", () => {
    const random = Math.floor(Math.random() * allAnimations.length);
    // 隨機一個動畫
    const animation = allAnimations[random];

    // 如果有包含在 loopAnimations 內，第三個參數為 true，動畫就會重複
    spineBoyPro.state.setAnimation(
      0,
      animation,
      loopAnimations.includes(animation)
    );
  });
}
