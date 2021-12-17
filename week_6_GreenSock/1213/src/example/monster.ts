import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js-legacy";
import { InteractionEvent } from "pixi.js-legacy";
import { app } from "../app";

export function monster(load: PIXI.Loader, res: any) {
  const monster = new Spine(res.monster.spineData);
  const eye: any = monster.skeleton.findBone("eye");
  monster.position.set(210, 500);
  monster.scale.set(0.5);

  // 眼睛隨著滑鼠移動
  app.stage.addListener("pointermove", (e: InteractionEvent) => {
    const mouseX = e.data.global.x;
    const mouseY = e.data.global.y;
    eye.x = mouseX - 210 + 13;
    eye.y = -(mouseY - 500 - 60);
  });

  // 點擊就笑一次
  app.stage.interactive = true;
  app.stage.addListener("click", () => {
    monster.state.setAnimation(0, "laugh", false);
  });

  app.stage.addChild(monster);
}
