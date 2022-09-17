import * as PIXI from "pixi.js";
import { Power0, TimelineMax, TweenMax } from "gsap";

const app = new PIXI.Application({ width: 900, height: 500, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader.add("bunny", "../img/bunny.png").load(setup);

async function setup() {
    const text = new PIXI.Text("0");
    text.position.set(800, 0);
    app.stage.addChild(text);
    let luckyTreeSymbol = 0;
    const list: Function[] = [];
    document.querySelector(".event")?.addEventListener("pointerup", () => {
        luckyTreeSymbol += Number(document.querySelector("input")?.value);
        list.push(() => {
            const counter = { score: +text.text };
            const time = (luckyTreeSymbol - +text.text) * 0.1;
            TweenMax.to(counter, time > 0.5 ? 0.5 : time, {
                ease: Power0.easeNone,
                delay: 0.3,
                score: luckyTreeSymbol,
                onUpdate: () => {
                    Number(text.text) < ~~counter.score && (text.text = `${~~counter.score}`);
                },
                onComplete: () => {
                    console.log(luckyTreeSymbol);
                    //text.text = `${luckyTreeSymbol}`;
                },
            });
        });
    });
    document.querySelector(".start")?.addEventListener("pointerup", () => {
        list.forEach((v) => v());
        list.length = 0;
    });
    Array.from({ length: 5 }, (_, i) => {
        app.stage.addChild(PIXI.Sprite.from("bunny")).x = i * 50;
    });
    new PIXI.Container().on("addEvent", () => {});
    //TweenMax.to({}, 1);
}

export default {};
