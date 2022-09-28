import * as PIXI from "pixi.js";
import "pixi-spine";
import { Power0, TweenMax } from "gsap";

const app = new PIXI.Application({ width: 1500, height: 900, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader
    .add("bunny", "../img/bunny.png")
    // .add("gamePlay", "../demo/spine-3.8.99/gamePlay.json")
    // .add("idol", "../demo/spine-3.8.99/idol_A.json")
    .add("effect", "../demo/01_json/effect_style136.json")
    .add("moreSpin", "../demo/more2/moreSpin.json")
    .load(setup);

app.ticker.remove(app.render, app);

async function setup() {
    PIXI.extras.BitmapText;
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
    const con = new PIXI.Container();
    Array.from({ length: 5 }, (_, i) => {
        con.addChild(PIXI.Sprite.from("bunny")).x = i * 50;
    });
    con.cacheAsBitmap = false;
    console.log();

    let elapsedTime = 0;

    const spine = new PIXI.spine.Spine(app.loader.resources.moreSpin.spineData);
    spine.position.set(500, 250);
    console.log(spine.spineData.animations.map(({ name }) => name));

    const [five, ten] = spine.spineData.skins.map(({ name }) => name);
    spine.skeleton.setSkinByName(ten);
    spine.update(0);
    spine.hackTextureBySlotName("num/6", PIXI.Texture.from("bunny"), new PIXI.Rectangle());
    spine.hackTextureBySlotName("num/7", PIXI.Texture.from("bunny"), new PIXI.Rectangle(50, 0, 100, 200));
    spine.skeleton.findSlot("num/7").currentSprite.addChild(con);
    spine.state.addAnimation(0, "L", true, 0);
    app.stage.addChild(spine);

    app.ticker.add((delta) => {
        elapsedTime += delta;
        if (elapsedTime >= 2) {
            app.render();
            elapsedTime = 0;
        }
    });
}

export default {};
