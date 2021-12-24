import * as PIXI from "pixi.js-legacy";
import { removeRunes } from "./removeRunes";
import { showFallRunes } from "./showFall/showFallTimeline";
import { addFallRunes } from "./addFallRunes";
import { gameInit, setRunes } from "./setGame";
import { GameMusic } from "./GameMusic";
import { showFallTicker } from "./showFall/showFallTicker";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new PIXI.Application({
  width: 768,
  height: 1024 + 128 * 2,
});
document.querySelector("#app")?.appendChild(app.view);
app.loader
  .add("../img/spritesheet.json")
  .add("background", "../img/avg_16.png");
gameInit(app);

async function playGame(): Promise<void> {
  const res = await removeRunes(app);
  if (res) {
    addFallRunes(app);
    await showFallTicker(app);
    playGame();
  }
}

// 開始
document.querySelector("#play")?.addEventListener("click", () => {
  console.log("開始");
  playGame();
});

// 重新
document.querySelector("#rest")?.addEventListener("click", () => {
  app.stage.removeChildren(2);
  setRunes(app);
  sessionStorage.setItem("combo", `1`);
});

// 音樂播放
document.querySelector("#music")?.addEventListener("click", () => {
  GameMusic.backgroundMusic.play();
});
