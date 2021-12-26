import * as PIXI from "pixi.js-legacy";
import { testSpriteMask } from "./spriteMask";
import { SIZE } from "./tools/enum";
import { testGraphicsMask } from "./graphicsMask";
import { setStats } from "./tools/setStats";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new PIXI.Application({
  width: SIZE.width,
  height: SIZE.height,
});
document.querySelector("#app")?.appendChild(app.view);
app.loader.load(() => {
  setStats(app);
  testGraphicsMask(app, 10);
  setDom(app);
});

function setDom(app: PIXI.Application): void {
  const select = document.querySelector(".form-select") as HTMLInputElement;
  const input = document.querySelector("input") as HTMLInputElement;
  input.defaultValue = "10";
  document.querySelector("#play")?.addEventListener("click", () => {
    switch (select.value) {
      case "Sprite":
        testSpriteMask(app, parseInt(input.value));
        break;
      case "Graphics":
        testGraphicsMask(app, parseInt(input.value));
        break;
    }
    console.log(app.stage.children.length);
  });
  document.querySelector("#remove")?.addEventListener("click", () => {
    app.stage.removeChildren(0);
  });
}
