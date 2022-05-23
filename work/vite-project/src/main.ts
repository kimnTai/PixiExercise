import * as PIXI from "pixi.js";
import { Power0, TweenMax } from "gsap";

PIXI.settings.SORTABLE_CHILDREN = true;

const app = new PIXI.Application({ width: 1200, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader.add("line", "../img/FX_Line-1.png").load(() => {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xde3249);
    const values = Array.from({ length: 7 }, (_, i) => {
        const index = Math.floor(Math.random() * 3);
        graphics.drawCircle((i * app.view.width) / 6, [100, 300, 500][index], 5);
        return {
            x: (i * app.view.width) / 6,
            y: [100, 300, 500][index],
        };
    });
    graphics.endFill();
    const point = Array.from({ length: 100 }, () => ({ ...values[0] } as PIXI.Point));
    const rope = new PIXI.mesh.Rope(PIXI.Texture.from("line"), point);
    const vars = {
        repeat: -1,
        repeatDelay: 1,
        ease: Power0.easeNone,
        bezier: values,
    };
    const container = new PIXI.Container();
    const textArray = Array.from({ length: 20 }, () => {
        const basicText = new PIXI.Text("X2");
        basicText.position.set(values[0].x, values[0].y);
        basicText.anchor.set(0.5);
        container.addChild(basicText);
        return basicText;
    });

    // TweenMax.staggerTo(rope.points, 1, vars, 0.01);
    // TweenMax.staggerTo(textArray, 1, vars, 0.05);

    // app.stage.addChild(rope);
    // app.stage.addChild(graphics);
    // app.stage.addChild(container);

    function createBox(color: number, w: number, h: number, name: string) {
        const boxContainer = new PIXI.Container();
        boxContainer.name = name;
        const box = new PIXI.Graphics();
        box.beginFill(color);
        box.drawRect(0, 0, 100, 100);
        box.endFill();

        const infoStyle = new PIXI.TextStyle({ fontSize: 12, fill: 0xffffff });
        const info = new PIXI.Text(name, infoStyle);
        info.x = 5;
        info.y = 5;
        boxContainer.addChild(box);
        boxContainer.addChild(info);
        return boxContainer;
    }

    const box1 = createBox(0xff0000, 100, 100, "box1");
    const box2 = createBox(0xff9900, 100, 100, "box2");

    box1.x = 20;
    box1.y = 20;
    box2.x = 70;
    box2.y = 90;

    app.stage.addChild(box1);
    app.stage.addChild(box2);
    app.stage.children.forEach((child, index) => {
        console.log(index, child.name, (<any>child).zIndex);
    });
});
