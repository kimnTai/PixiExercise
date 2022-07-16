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
            // const range = new Components.Range({});
            // const betLine = new Components.BetLine();
            // const moveLine = new Components.MoveLine();
            // betLine.position.set(200, 150);
            // moveLine.position.set(200, 150);
            // range.position.set(100, 50);
            // this.stage.addChild(range, moveLine);
            const style = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 36,
                fontStyle: "italic",
                fontWeight: "bold",
                fill: ["#ffffff", "#00ff99"], // gradient
                stroke: "#4a1850",
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: "#000000",
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
                wordWrap: true,
                wordWrapWidth: 440,
                lineJoin: "round",
            });
            let count = 0;
            const richText = new PIXI.Text("0", style);
            this.stage.addChild(richText);
            const maxRange = 60; //當用戶的兩次加速度差值大於這個幅度，判定用戶進行了搖一搖功能
            let lastX = 0,
                lastY = 0,
                lastZ = 0;
            window.addEventListener("devicemotion", (e) => {
                let motion = e.acceleration;
                let { x, y, z } = motion;
                let range = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
                if (range > maxRange) {
                    //用戶進行了搖一搖
                    alert("您進行了搖一搖");
                }
                lastX = x;
                lastY = y;
                lastZ = z;
            });
        });
    }

    async _init(): Promise<unknown> {
        return new Promise((resolve) => {
            document.querySelector("#app").appendChild(this.view);
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
