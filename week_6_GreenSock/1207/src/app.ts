import * as PIXI from "pixi.js-legacy";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import { showText } from "./showText";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export let app: PIXI.Application;
function createApp(): void {
  app = new PIXI.Application({
    width: 800,
    height: 400,
  });
  document.querySelector("#app")?.appendChild(app.view);
  app.loader.load(() => {
    showText(app);
  });
}
createApp();

function test(): void {
  const rect = new PIXI.Graphics();
  rect.beginFill(0x0dcaf0);
  rect.drawRect(0, 0, 50, 50);
  document.querySelector("button")?.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(rect, { duration: 1, x: 300, ease: "none" }, 1).to(rect, {
      duration: 1,
      y: 200,
      ease: "none",
    });
  });

  app.stage.addChild(rect);
}
