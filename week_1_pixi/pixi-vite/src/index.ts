import * as PIXI from "pixi.js";
import { createApp } from "./app";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

function init(): void {
  createApp();
}
init();
