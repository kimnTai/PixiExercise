import BetLine from "./betLine";
import { Dict } from "@pixi/utils";
import gsap from "gsap";
import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { line3x5_20 } from "../config";

gsap.registerPlugin(MotionPathPlugin);

export default class MoveLine extends BetLine {
    _resources: Dict<PIXI.LoaderResource>;
    _pointsArray: PIXI.Point[][] = [];
    constructor() {
        super();
        const loader = new PIXI.Loader();
        loader.add("coin", "../export/coin-pro.json").load(() => {
            this._resources = loader.resources;
            this._startShow();
        });
    }

    async _startShow(): Promise<void> {
        const array = (<PIXI.Container>this.children[0]).children as PIXI.SimpleRope[];
        const points = this._createPath(line3x5_20, this.calculateFix(line3x5_20));
        const pointsArray = [...points];
        for (let i = 0; i < array.length; i++) {
            const current = array[i];
            current.texture = PIXI.Texture.from("yellow");
            const red = new PIXI.SimpleRope(PIXI.Texture.from("red"), pointsArray[i]);
            const mask = PIXI.Sprite.from("mask");
            mask.scale.y = 1.5;
            mask.anchor.y = 0.5;
            red.mask = mask;
            const { x, y } = pointsArray[i][0];
            const spine = this._createSpine();
            spine.position.set(x, y);
            mask.position.set(x, y);
            current.addChild(red, mask, spine);
            await gsap.to([mask, spine], {
                motionPath: { path: pointsArray[i], curviness: 0 },
                duration: 1,
                ease: "none",
            });
            current.removeChildren();
        }
    }

    _createSpine(): Spine {
        const coin = new Spine(this._resources["coin"].spineData);
        coin.scale.set(0.2);
        coin.state.setAnimation(0, "animation", true);
        coin.state.timeScale = 3;
        return coin;
    }
}
