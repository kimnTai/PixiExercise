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
    .add("btn", "../img/btn_active.png")
    .load((loader: PIXI.Loader, res: any) => {
        const more = new Spine(res.more.spineData);
        more.position.set(700, 500);
        const btn = PIXI.Sprite.from("btn");
        btn.anchor.set(0.5);
        const ta = (more.children[9] as PIXI.Container).children[0] as PIXI.Sprite;
        const t = (more.children[10] as PIXI.Container).children[0] as PIXI.Sprite;
        ta.texture = null;
        t.texture = null;
        t.addChild(btn);

        more.state.setAnimation(0, "animation", true);
        app.stage.addChild(more);
    });
