import * as PIXI from "pixi.js";

export default class Range extends PIXI.Container {
    constructor({ intervalX = 200, intervalY = 200 }) {
        super();
        this.draw();
    }
    draw() {
        const graphics = new PIXI.Graphics();
        this.addChild(graphics);
        graphics.lineStyle(3, 0x3500fa, 1);
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 3; j++) {
                graphics.drawRect(0, 0, 200 * i, 200 * j);
            }
        }
        graphics.endFill();
    }
}
