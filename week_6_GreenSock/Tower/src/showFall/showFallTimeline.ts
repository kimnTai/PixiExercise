import { Application, Container } from "pixi.js-legacy";
import { Runes } from "../Runes";
import { gsap } from "gsap";

/**移動掉落珠子 */
function showFallRunes(app: Application): Promise<boolean> {
  return new Promise((resolve) => {
    const container = app.stage.getChildByName("盤面") as Container;
    const row = container.children as Container[];
    const timeline = gsap.timeline({ ease: "power1.in" });
    row.forEach((item) => {
      const runesArray = item.children as Runes[];
      runesArray.forEach((runes, index) => {
        const originY = runes.y;
        const newY = app.screen.height - 64 - index * 128;
        const timeMax = 0.75;
        let time = (newY - originY) / 512;
        if (time > timeMax) {
          time = timeMax;
        }
        timeline.to(
          runes,
          {
            y: newY,
            duration: time,
          },
          0
        );
      });
    });
    timeline.then(() => {
      resolve(true);
    });
  });
}
export { showFallRunes };
