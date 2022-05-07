import { Dict } from "@pixi/utils";
import gsap from "gsap";
import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import pointValues from "./pointValues";
gsap.registerPlugin(MotionPathPlugin);

class App extends PIXI.Application {
    _resources: Dict<PIXI.LoaderResource>;
    _pointsArray: PIXI.Point[][] = [];

    constructor() {
        super({
            width: 1200,
            height: 1000,
            antialias: true,
            resolution: 1,
        });
        this._init();
    }

    async _init(): Promise<void> {
        await new Promise((resolve) => {
            document.querySelector("#app").appendChild(this.view);
            this.loader
                .add("red", "../img/pic_main_line_1.png")
                .add("yellow", "../img/pic_main_line_6.png")
                .add("blue", "../img/pic_main_line_5.png")
                .add("coin", "../export/coin-pro.json")
                .add("mask", "../img/pic_mg_reelMaskSmall.png")
                .add("line", "../img/FX_Line-2.png")
                .load((loader, resources) => {
                    this._resources = resources;
                })
                .load(resolve);
        });

        this.stage.addChild(this._createLine());
    }

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
        const points = Array.from({ length: 100 }, () => ({ x, y } as PIXI.Point));
        const container = new PIXI.Container();
        const rope = new PIXI.SimpleRope(PIXI.Texture.from(style), points);
        container.addChild(rope);
        this.showA(points);
        return container;
    }

    showA(points: PIXI.Point[]) {
        const duration = 1;
        gsap.to(points, {
            motionPath: { path: this._pointsArray[0], curviness: 0.5 },
            duration,
            ease: "none",
            stagger: 0.01 * duration,
            repeat: -1,
        });
    }

    _createPoints(): PIXI.Point[] {
        const ropeLength = this.view.width / 6;
        const points = [];
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xde3249);
        for (let i = 0; i <= 6; i++) {
            const index = Math.floor(Math.random() * 3);
            points.push(new PIXI.Point(i * ropeLength, [100, 300, 500][index]));
            graphics.drawCircle(i * ropeLength, [100, 300, 500][index], 5);
        }
        graphics.endFill();
        this.stage.addChild(graphics);
        return points;
    }

    async _startShow(): Promise<void> {
        const array = [...this.stage.children].reverse() as PIXI.Container[];
        const pointsArray = [...this._pointsArray].reverse();
        for (let i = 0; i < array.length; i++) {
            const container = array[i];
            const red = container.children[1];
            const mask = PIXI.Sprite.from("mask");
            mask.scale.y = 1.5;
            mask.anchor.y = 0.5;
            red.mask = mask;
            const coin = this._createSpine();
            const { x, y } = pointsArray[i][0];
            coin.position.set(x, y);
            mask.position.set(x, y);
            container.addChild(mask, coin);
            const duration = 3;
            gsap.registerPlugin(MotionPathPlugin);
            await gsap.to([coin, mask], {
                motionPath: { path: pointsArray[i], curviness: 0 },
                duration,
                ease: "none",
            });
            container.removeChild(red, mask);
            container.visible = false;
        }
        array.forEach((item) => (item.visible = true));
    }

    _createSpine(): Spine {
        const coin = new Spine(this._resources["coin"].spineData);
        coin.scale.set(0.2);
        coin.state.setAnimation(0, "animation", true);
        coin.state.timeScale = 3;
        return coin;
    }
}

export default App;
