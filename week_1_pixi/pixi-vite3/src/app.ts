import * as PIXI from "pixi.js";
import * as pixi_spine from "pixi-spine";

export default class App extends PIXI.Application {
    constructor() {
        super({ width: 1200, height: 800 });
        this._init().then(() => {
            const spine = new pixi_spine.Spine(<any>this.loader.resources["effect"].spineData);
            const [_in, out, score] = spine.spineData.animations.map(({ name }) => name);
            spine.hackTextureBySlotName("01_pic/coin3", PIXI.Texture.from("blue"));
            spine.scale.set(0.5);
            spine.position.set(600, 400);
            this.stage.addChild(spine);
            spine.update(0);

            // spine.state.addAnimation(0, _in, false, 0);
            // spine.state.addAnimation(0, score, true, 0);
        });
    }

    async _init() {
        await new Promise((resolve) => {
            document.querySelector("#app")?.appendChild(this.view);
            this.loader
                .add("red", "../img/pic_main_line_10.png")
                .add("yellow", "../img/pic_main_line_11.png")
                .add("blue", "../img/pic_main_line_5.png")
                .add("mask", "../img/pic_mg_reelMaskSmall.png")
                .add("line", "../img/FX_Line-2.png")
                .add("boy", "../demo/spineboy-pro.skel")
                .add("effect", "../demo/01_json/effect_style136.json")
                .load(resolve);
        });
    }
}
