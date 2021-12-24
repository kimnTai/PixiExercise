import { Application, Container } from "pixi.js-legacy";
import { GameListener } from "./GameListener";
import { Runes } from "./Runes";

/**新增掉落珠子 */
export function addFallRunes(app: Application) {
  const container = app.stage.getChildByName("盤面") as Container;
  const row = container.children as Container[];
  const array = ["f.png", "p.png", "w.png"];
  row.forEach((item, index) => {
    const rowLength = item.children.length;
    if (rowLength < 5) {
      for (let i = 0; i < 5 - rowLength; i++) {
        const random = Math.floor(Math.random() * array.length);
        const runes = Runes.from(array[random]) as Runes;
        runes.anchor.set(0.5);
        runes.interactive = true;
        runes.x = 64 + index * 128;
        runes.y = app.screen.height - 128 * 2 - 640 - 64 - 128 * i;
        item.addChild(runes);
      }
    }
  });
}
