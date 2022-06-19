import { Dict } from "@pixi/utils";
import * as PIXI from "pixi.js";
import * as Components from "./components";

export default class App extends PIXI.Application {
    constructor() {
        super({
            width: 1200,
            height: 750,
            antialias: true,
            resolution: 1,
        });
        this._init().then(() => {
            const range = new Components.Range({});
            const betLine = new Components.BetLine();
            const moveLine = new Components.MoveLine();
            betLine.position.set(200, 150);
            moveLine.position.set(200, 150);
            range.position.set(100, 50);
            this.stage.addChild(range, moveLine);
        });
    }

    async _init(): Promise<unknown> {
        return new Promise((resolve) => {
            document.querySelector("#app").appendChild(this.view);
            this.loader
                .add("red", "../img/pic_main_line_1.png")
                .add("yellow", "../img/pic_main_line_6.png")
                .add("blue", "../img/pic_main_line_5.png")
                .add("mask", "../img/pic_mg_reelMaskSmall.png")
                .add("line", "../img/FX_Line-2.png")
                .load(resolve);
        });
    }
}
