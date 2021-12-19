import { Application, Container } from "pixi.js-legacy";
import { Runes } from "./runes";
import { gsap } from "gsap";

/**移動符石 */
export function moveRunes(app: Application) {
  return new Promise((resolve) => {
    const container = app.stage.getChildByName("盤面") as Container;
    const row = container.children as Container[];
    row.forEach((item) => {
      const runesArray = item.children as Runes[];
      runesArray.forEach((runes, index) => {
        const newY = app.screen.height - 64 - index * 128;
        gsap.to(runes, { y: newY, duration: 1, onComplete: resolve });
      });
    });
  });
}
