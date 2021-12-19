import * as PIXI from "pixi.js-legacy";
import { Application } from "pixi.js-legacy";
import { removeRunes } from "./removeRunes";
import { moveRunes } from "./moveRunes";
import { addRunes } from "./addRunes";
import { setGame, setRunes } from "./setGame";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new Application({
  width: 768,
  height: 640,
});
document.querySelector("#app")?.appendChild(app.view);
app.loader.add("../img/spritesheet.json");
setGame(app);

async function play(): Promise<void> {
  const res = await removeRunes(app);
  if (res) {
    addRunes(app);
    await moveRunes(app);
    play();
  }
}

// 開始
document.querySelector("#play")?.addEventListener("click", () => {
  console.log("開始");
  play();
});

// 重新
document.querySelector("#rest")?.addEventListener("click", () => {
  app.stage.removeChildren(1);
  setRunes(app);
});
