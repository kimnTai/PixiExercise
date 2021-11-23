import * as PIXI from "pixi.js-legacy";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const example = new PIXI.Application({
  width: 750,
  height: 550,
  antialias: true,
  resolution: 1,
});
document.querySelector("#example")?.appendChild(example.view);

const graphics = new PIXI.Graphics()
  .lineStyle(2, 0xaaaaaa, 1)
  .moveTo(20, 20)
  .lineTo(200, 200)
  .arcTo(350, 200, 450, 900, 100)
  .lineTo(200, 500)
  .lineTo(700, 100)
  .bezierCurveTo(700, 100, 700, 400, 100, 100);

const points = graphics.currentPath.points;
const values = [];

for (let i = 0; i < points.length; i += 2) {
  values.push({ x: points[i], y: points[i + 1] });
}

const circle = new PIXI.Graphics();
circle.beginFill(0x0dcaf0);
circle.drawCircle(0, 0, 50);

circle.position.copyFrom(values[0]);
circle.pivot.set(0.5);
circle.scale.set(0.5);

gsap.registerPlugin(MotionPathPlugin);
gsap.to(circle, {
  motionPath: {
    path: values,
  },
  duration: 10,
  repeat: -1,
  yoyo: true,
});

example.stage.addChild(circle, graphics);
