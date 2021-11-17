import * as PIXI from "pixi.js-legacy";
import { pixiInit } from "./pixi-component";

const init = (): void => {
  pixiInit();
  registerPixiInspector();
};
init();

// 開發工具註冊
function registerPixiInspector(): void {
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
    (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
}
