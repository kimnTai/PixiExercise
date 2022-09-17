import * as PIXI from "pixi.js";

export default class App extends PIXI.Application {
    constructor() {
        super({
            width: 1200,
            height: 750,
            antialias: true,
            resolution: 1,
        });
        this._init().then(() => {});
    }

    async _init(): Promise<unknown> {
        return new Promise((resolve) => {
            document.querySelector("#app")?.appendChild(this.view);
            this.loader
                .add("red", "../img/pic_main_line_10.png")
                .add("yellow", "../img/pic_main_line_11.png")
                .add("blue", "../img/pic_main_line_5.png")
                .add("mask", "../img/pic_mg_reelMaskSmall.png")
                .add("line", "../img/FX_Line-2.png")
                .load(resolve);
        });
    }
}
