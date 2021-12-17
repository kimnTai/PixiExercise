import * as PIXI from "pixi.js-legacy";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new PIXI.Application();
document.querySelector("#app").appendChild(app.view);
