import * as PIXI from "pixi.js-legacy";
import { Application, Container, Sprite } from "pixi.js-legacy";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new Application({
  width: 136,
  height: 136,
});
document.querySelector("#app")?.appendChild(app.view);

const icon = Sprite.from("../img/112031.webp");
icon.anchor.set(0.5);
const green = Sprite.from("../img/green.png");
green.scale.set(app.screen.width / 128);
const starContainer = new Container();
const starNum = 4;
for (let i = 0; i < 5; i++) {
  let star = Sprite.from("../img/star.png");
  star.anchor.set(0.5);
  if (i >= starNum) {
    star = Sprite.from("../img/star_dark.png");
    star.anchor.set(0.5);
  }

  star.x = 128 * i;
  starContainer.addChild(star);
}
starContainer.scale.set(18 / 128);
starContainer.position.set(18, 118);

const iconContainer = new Container();
iconContainer.position.set(app.screen.width / 2, app.screen.height / 2);
iconContainer.addChild(icon);
app.stage.addChild(iconContainer, green, starContainer);
