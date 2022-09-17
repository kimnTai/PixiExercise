import * as PIXI from "pixi.js";
import gsap from "gsap";
import pointValues from "./pointValues";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const app = new PIXI.Application({
    width: 1200,
    height: 1000,
    antialias: true,
    transparent: true,
});
document.querySelector("#app").appendChild(app.view);

gsap.registerPlugin(MotionPathPlugin);
const newTweenPoint: { x: number; y: number }[] = [];
let switcher = false;

const _movePos = { x: 0, y: 0 };

gsap.to(_movePos, {
    duration: 5,
    motionPath: { path: pointValues, curviness: 0 },
    onUpdate: () => {
        //When Counting...Push new value to new array
        newTweenPoint.push({ x: _movePos.x, y: _movePos.y });
    },
    onComplete: () => {
        switcher = true; //When done run Animation
        console.log(newTweenPoint);
    },
});

const ropePoints: { x: number; y: number }[] = [];
for (let i = 0; i < 80; i = i + 1) {
    ropePoints.push(pointValues[i]);
}
const imgSrc = PIXI.Texture.from("http://scottmcdonnell.github.io/pixi-examples/_assets/snake.png");
const strip = new PIXI.SimpleRope(imgSrc, ropePoints as PIXI.Point[]);
strip.x = -459;

const snakeContainer = new PIXI.Container();
snakeContainer.position.set(250, 300);
snakeContainer.scale.set(0.5);
snakeContainer.addChild(strip);
app.stage.addChild(snakeContainer);

let timer = 0;

app.ticker.add(() => {
    if (switcher) {
        if (timer >= newTweenPoint.length - 80) {
            timer = 0; //repeat
        }

        for (let i = 0; i < ropePoints.length; i++) {
            ropePoints[i].x = newTweenPoint[i + timer].x;
            ropePoints[i].y = newTweenPoint[i + timer].y;
        }
        timer++;
    }
});
