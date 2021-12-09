import * as PIXI from "pixi.js-legacy";
import { gsap } from "gsap";

/**文字從 0 跳到 100 */
export function showText(app: any) {
  const text = new PIXI.Text("0", { fontSize: 36, fill: 0xffffff });
  const counter = { score: 0 };
  const tween = gsap.to(counter, {
    duration: 10,
    score: 100,
    onUpdate() {
      text.text = counter.score.toFixed(2);
    },
  });
  app.stage.addChild(text);
}
