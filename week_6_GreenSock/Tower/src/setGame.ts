import { Runes } from "./Runes";
import { GameListener } from "./GameListener";
import {
  Application,
  Container,
  Sprite,
  Text,
  Texture,
  TilingSprite,
} from "pixi.js-legacy";
import { addRotateListener } from "./develop/addRotateListener";

/**遊戲設置 */
function gameInit(app: Application): void {
  app.loader.load(() => {
    setBackground(app);
    setComboText(app);
    setRunes(app);
    addRotateListener(app);
    sessionStorage.setItem("combo", `1`);
  });
}

function setComboText(app: Application): void {
  const combo = new Text("COMBO");
  combo.name = "combo";
  combo.style = {
    fontSize: 60,
    fill: ["#c9b698", "#877059"],
    dropShadow: true,
    dropShadowColor: "#645951",
    dropShadowBlur: 4,
  };
  combo.x = app.screen.width / 2;
  combo.y = 224;
  app.stage.addChild(combo);
}

function setBackground(app: Application): void {
  const texture = Texture.from("base.png");
  const tilingSprite = new TilingSprite(texture, app.screen.width, 640);
  const container = new Container();
  const background = Sprite.from("background");
  tilingSprite.name = "盤面背景";
  tilingSprite.y = app.screen.height - 640;
  tilingSprite.scale.set(128 / 84);
  background.scale.set(768 / 1024);
  background.y = -300;
  container.addChild(tilingSprite);
  app.stage.addChild(container);
}

function setRunes(app: Application): void {
  //const array = ["d.png", "f.png", "h.png", "l.png", "p.png", "w.png"];
  const array = ["f.png", "p.png", "w.png"];
  const container = new Container();
  container.name = "盤面";
  for (let j = 0; j < 6; j++) {
    const row = new Container();
    row.sortableChildren = true;
    row.name = `${j}`;
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * array.length);
      const runes = Runes.from(array[random]) as Runes;
      runes.anchor.set(0.5);
      runes.x = 64 + j * 128;
      runes.y = app.screen.height - 64 - i * 128;
      runes.interactive = true;
      row.addChild(runes);
      // 增加點擊事件
      // GameListener.addClick(runes);
    }
    container.addChild(row);
  }
  app.stage.addChild(container);
}

export { gameInit, setRunes };
