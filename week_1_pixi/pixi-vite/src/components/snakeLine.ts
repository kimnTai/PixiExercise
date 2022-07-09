import { Dict } from "@pixi/utils";
import gsap from "gsap";
import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { line3x5_20 } from "../config";

export default class SnakeLine extends PIXI.Container {
    _resources: Dict<PIXI.LoaderResource>;
    _pointsArray: PIXI.Point[][] = [];
    constructor() {
        super();
        this._init();
    }

    async _init(): Promise<void> {}

    _createLine(): PIXI.Container {
        const box = new PIXI.Container();
        const points = this._createPoints();
        this._pointsArray.push(points);

        const yellow = this._createLineBox(points, "line");
        box.addChild(yellow);
        return box;
    }

    _createLineBox(pointsA: PIXI.Point[], style: string): PIXI.Container {
        const [{ x, y }] = this._pointsArray[0];
        const point = Array.from({ length: 100 }, () => ({ x, y } as PIXI.Point));
        const container = new PIXI.Container();
        const rope = new PIXI.SimpleRope(PIXI.Texture.from(style), point);
        container.addChild(rope);
        this.showA(rope);
        return container;
    }

    showA(rope: PIXI.SimpleRope) {
        const { points } = rope.geometry as any;
        const duration = 1;
        gsap.to(points, {
            motionPath: { path: this._pointsArray[0], curviness: 0.5, autoRotate: true, alignOrigin: [0.5, 0.5] },
            duration,
            ease: "none",
            stagger: 0.01 * duration,
            repeat: -1,
        });
    }

    _createPoints(): PIXI.Point[] {
        const ropeLength = 1200 / 6;
        const points = [];
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xde3249);
        for (let i = 0; i <= 6; i++) {
            const index = Math.floor(Math.random() * 3);
            points.push(new PIXI.Point(i * ropeLength, [100, 300, 500][index]));
            graphics.drawCircle(i * ropeLength, [100, 300, 500][index], 5);
        }
        graphics.endFill();
        this.addChild(graphics);
        return points;
    }
}
