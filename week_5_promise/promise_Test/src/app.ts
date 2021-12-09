import * as PIXI from "pixi.js";
import { pixiInit } from "./pixi_component";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
    (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });


const init = (): void => {
  pixiInit();
};
init();
