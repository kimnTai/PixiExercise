import * as PIXI from "pixi.js-legacy";
import { State, StateSystem } from "pixi.js-legacy";
import { monster } from "./example/monster";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new PIXI.Application({
  width: 800,
  height: 600,
});
document.querySelector("#app").appendChild(app.view);

app.loader.add("monster", "../assets/monster/monster.json").load(monster);
