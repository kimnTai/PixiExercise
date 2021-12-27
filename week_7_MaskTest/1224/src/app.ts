import * as PIXI from "pixi.js-legacy";
import { testSpriteMask } from "./spriteMask";
import { SHAPE, SIZE } from "./tools/enum";
import { testGraphicsMask } from "./graphicsMask";
import { setStats } from "./tools/setStats";
import { graphicsMaskContainer } from "./Container/graphicsMaskContainer";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new PIXI.Application({
  width: SIZE.width,
  height: SIZE.height,
});
document.querySelector("#app")?.appendChild(app.view);
app.loader.load(() => {
  setStats(app);
  graphicsMaskContainer(app, 100);
  //testGraphicsMask(app, 50);
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
    console.log(app.stage.children.length / 2);
  });
  document.querySelector("#remove")?.addEventListener("click", () => {
    app.stage.removeChildren(0);
  });
}

function testMaskContainer(app: PIXI.Application, name: string) {
  const graphics = new PIXI.Graphics();
  const x = Math.random() * SIZE.width;
  const y = Math.random() * SIZE.height;
  graphics.beginFill();
  switch (name) {
    case "Rect":
      graphics.drawRect(x, y, 192, 108);
      break;
    case "Circle":
      graphics.drawCircle(x, y, 81);
      break;
    case "Ellipse":
      graphics.drawEllipse(x, y, 162, 40.5);
      break;
  }
  (app.stage.children[1] as PIXI.Container).addChild(graphics);
  (app.stage.children[1] as PIXI.Container).children[0].x += 10;
}
