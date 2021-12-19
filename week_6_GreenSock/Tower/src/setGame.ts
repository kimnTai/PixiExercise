import { Application, Container, Texture, TilingSprite } from "pixi.js-legacy";
import { Runes } from "./runes";

function setGame(app: Application): void {
  app.loader.load(() => {
    setBackground(app);
    setRunes(app);
  });
}

function setBackground(app: Application): void {
  const texture = Texture.from("base.png");
  const tilingSprite = new TilingSprite(
    texture,
    app.screen.width,
    app.screen.height
  );
  tilingSprite.scale.set(128 / 84);
  app.stage.addChild(tilingSprite);
}
function setRunes(app: Application): void {
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

export { setGame, setRunes };
