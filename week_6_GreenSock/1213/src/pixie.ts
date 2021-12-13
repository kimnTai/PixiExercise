import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js-legacy";
import { app } from "./app";

export function pixie(loader: PIXI.Loader, res: any): void {
  const pixie = new Spine(res.pixie.spineData);
  pixie.position.set(1024 / 3, 500);
  pixie.scale.set(0.3);

  pixie.stateData.setMix("running", "jump", 0.2);
  pixie.stateData.setMix("jump", "running", 0.4);
  pixie.state.setAnimation(0, "running", true);

  app.stage.addChild(pixie);
  app.stage.addListener("pointerdown", onTouchStart);
  function onTouchStart() {
    pixie.state.setAnimation(0, "jump", false);
    pixie.state.addAnimation(0, "running", true, 0);
  }
  app.start();
}

function setBackground(): void {
  const background = PIXI.Sprite.from("../assets/pixie/iP4_BGtile.jpg");
  const foreground = PIXI.Sprite.from("../assets/pixie/iP4_ground.png");
  foreground.anchor.set(0, 0.7);
  foreground.position.y = app.screen.height;
  app.stage.addChild(background, foreground);
}
