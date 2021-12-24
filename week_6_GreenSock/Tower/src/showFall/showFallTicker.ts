import { Application, Container } from "pixi.js-legacy";
import { Runes } from "../Runes";
import { gsap } from "gsap";

function showFallTicker(app: Application): Promise<boolean> {
  return new Promise((resolve) => {
    const container = app.stage.getChildByName("盤面") as Container;
    const row = container.children as Container[];
    const promiseArray: Promise<any>[] = [];
    row.forEach((item) => {
      const runesArray = item.children as Runes[];
      runesArray.forEach((runes, index) => {
        const newY = app.screen.height - 64 - index * 128;
        promiseArray.push(movePromise(runes, newY));
      });
    });
    Promise.all(promiseArray).then(() => {
      resolve(true);
    });
  });
}

/**
 * @description 回傳 ticker Promise
 * @param {Runes} runes
 * @param {number} newY
 * @returns {*}  {Promise<void>}
 */
function movePromise(runes: Runes, newY: number): Promise<void> {
  return new Promise((resolve) => {
    gsap.ticker.add(p1);
    const gravity = (9.80665 / 3600) * 1000;
    let speedY = 0;
    function p1() {
      if (runes.y >= newY) {
        gsap.ticker.remove(p1);
        runes.y = newY;
        resolve();
      } else {
        runes.y += speedY;
        speedY += gravity;
      }
    }
  });
}

export { showFallTicker };
