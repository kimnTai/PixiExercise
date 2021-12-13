import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js-legacy";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new PIXI.Application({
  width: 800,
  height: 600,
});
document.querySelector("#app").appendChild(app.view);

app.loader.add("coin", "../export/coin-pro.json").load(setup);

function setup(load: PIXI.Loader, res: any) {
  console.log(res);

  const coin = new Spine(res.coin.spineData);
  coin.state.setAnimation(0, "animation", true);
  coin.position.set(200);
  app.stage.addChild(coin);
}
