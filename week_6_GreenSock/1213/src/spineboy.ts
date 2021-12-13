import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js-legacy";
import { app } from "./app";

export function spineboy(loader: PIXI.Loader, res: any): void {
  const spineBoy = new Spine(res.spineboy.spineData);

  spineBoy.position.set(app.screen.width / 2, app.screen.height);

  // set up the mixes!
  spineBoy.stateData.setMix("walk", "jump", 0.2);
  spineBoy.stateData.setMix("jump", "walk", 0.4);
  spineBoy.state.setAnimation(0, "walk", true);

  app.stage.addChild(spineBoy);

  app.stage.on("pointerdown", () => {
    spineBoy.state.setAnimation(0, "jump", false);
    spineBoy.state.addAnimation(0, "walk", true, 0);
  });
}
