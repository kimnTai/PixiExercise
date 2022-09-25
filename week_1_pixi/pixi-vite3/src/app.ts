import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";

export default class App extends PIXI.Application {
    constructor() {
        super({ width: 1200, height: 800 });
        this.ticker.maxFPS = 30;
        this._init().then(() => {
            const spine = new Spine(<any>this.loader.resources["win_feedback"].spineData);
            const [_in, out, score, four] = spine.spineData.animations.map(({ name }) => name);
            spine.hackTextureBySlotName("01_pic/coin3", PIXI.Texture.from("blue"));
            spine.scale.set(0.5);
            spine.position.set(600, 400);
            this.stage.addChild(spine);
            console.log(spine.spineData.animations.map(({ name }) => name));

            spine.state.addAnimation(0, four, true, 0);
            // console.log(this.loader.resources["idol_A"].spineData);

            // const spine = new Spine(<any>this.loader.resources["idol_A"].spineData);
            // console.log(spine);
            // //spine.state.setAnimation(0, "loop", true);
            // spine.state.setAnimation(0, "idle_1", true);
            // spine.position.set(500, 500);
            // this.stage.addChild(spine);
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
                .add("gamePlay", "../demo/spine-3.8.99/gamePlay.json")
                .add("idol_A", "../demo/spine-3.8.99/idol_A.json")
                .add("SC", "../demo/reel/SC@2x.json")
                .add("win_feedback", "../demo/reel/win_feedback@2x.json")
                .load(resolve);
        });
    }
}
