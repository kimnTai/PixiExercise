import * as PIXI from "pixi.js-legacy";
import { Spine } from "pixi-spine";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
    (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new PIXI.Application({
    width: 1400,
    height: 1000,
});
document.querySelector("#app").appendChild(app.view);

app.loader
    .add("boy", "../demo/spineboy-pro.skel")
    .add("more", "../more/moreSpin.json")
    .add("bunny", "../img/bunny.png")
    .add("flowerTop", "../img//flowerTop.png")
    .load((loader: PIXI.Loader, res: any) => {
        const more = new Spine(res.more.spineData);
        more.position.set(500, 500);
        const flowerTop = PIXI.Sprite.from("flowerTop");
        const bunny = PIXI.Sprite.from("bunny");
        bunny.scale.set(3);
        flowerTop.anchor.set(0.5);

        const _text = (more.children[7] as PIXI.Container).children[0] as PIXI.Sprite;
        const add = (more.children[8] as PIXI.Container).children[0] as PIXI.Sprite;
        const one = (more.children[9] as PIXI.Container).children[0] as PIXI.Sprite;
        const zero = (more.children[10] as PIXI.Container).children[0] as PIXI.Sprite;
        _text.texture = null;
        add.texture = null;
        one.texture = null;
        zero.texture = null;
        zero.addChild(flowerTop);
        add.addChild(bunny);
        const text = new PIXI.Text("FREE SPINS 測試", { fill: "0xffffff", fontSize: "75px" });
        text.x = -300;
        _text.addChild(text);

        more.state.setAnimation(0, "animation", true);
        app.stage.addChild(more);
    });
