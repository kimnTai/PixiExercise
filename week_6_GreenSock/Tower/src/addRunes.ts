import { Application, Container } from "pixi.js-legacy";
import { Runes } from "./runes";
import { gsap } from "gsap";

/**新增 */
export function addRunes(app: Application) {
  const container = app.stage.getChildByName("盤面") as Container;
  const row = container.children as Container[];
  //const array = ["d.png", "f.png", "h.png", "l.png", "p.png", "w.png"];
  const array = ["f.png", "p.png", "w.png"];
  row.forEach((item) => {
    const rowLength = item.children.length;
    if (rowLength < 5) {
      for (let i = 0; i < 5 - rowLength; i++) {
        const random = Math.floor(Math.random() * array.length);
        const runes = Runes.from(array[random]);
        runes.name = `${array[random]}`;
        runes.anchor.set(0.5);
        runes.y = -64 - i * 128;
        item.addChild(runes);
      }
    }
  });
}
