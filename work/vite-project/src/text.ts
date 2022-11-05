import * as PIXI from "pixi.js";

export default class Text extends PIXI.Text {
    constructor(
        text?: string | undefined,
        style?: PIXI.TextStyleOptions | undefined,
        canvas?: HTMLCanvasElement | undefined
    ) {
        super();
    }
}
