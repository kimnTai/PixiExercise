import * as PIXI from "pixi.js-legacy";
import { Application, Container, Sprite, Texture } from "pixi.js-legacy";
import { Runes } from "./runes";
import { removeRunes } from "./removeRunes";
import { moveRunes } from "./moveRunes";
import { addRunes } from "./addRunes";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new Application({
  width: 768,
  height: 640,
});
document.querySelector("#app")?.appendChild(app.view);
app.loader.add("../img/spritesheet.json").load(setBackground).load(setRunes);

function setBackground(): void {
  const texture = Texture.from("base.png");
  const tilingSprite = new PIXI.TilingSprite(
    texture,
    app.screen.width,
    app.screen.height
  );
  tilingSprite.scale.set(128 / 84);
  app.stage.addChild(tilingSprite);
}

function setRunes(): void {
  //const array = ["d.png", "f.png", "h.png", "l.png", "p.png", "w.png"];
  const array = ["f.png", "p.png", "w.png"];
  const container = new Container();
  container.name = "盤面";
  for (let j = 0; j < 6; j++) {
    const row = new Container();
    row.name = `${j}`;
    row.x = 64 + j * 128;
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * array.length);
      const runes = Runes.from(array[random]);
      runes.name = `${array[random]}`;
      runes.anchor.set(0.5);
      runes.y = 640 - 64 - i * 128;
      row.addChild(runes);
    }
    container.addChild(row);
  }
  app.stage.addChild(container);
}
// 開始
document.querySelector("#play")?.addEventListener("click", () => {
  removeRunes(app).then((res) => {
    if (res) {
      addRunes(app);
      moveRunes(app);
    }
  });
});
// 重新
document.querySelector("#rest")?.addEventListener("click", () => {
  app.stage.removeChildren(1);
  setRunes();
});
