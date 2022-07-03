import { Power0, TweenMax } from "gsap";
import { app } from "./main";

const values = Array.from({ length: 7 }, (_, i) => {
    const index = Math.floor(Math.random() * 3);
    return {
        x: (i * app.view.width) / 6,
        y: [100, 300, 500][index],
    };
});
const point = Array.from({ length: 100 }, () => ({ ...values[0] } as PIXI.Point));
const rope = new PIXI.mesh.Rope(PIXI.Texture.from("line"), point);
const vars = {
    repeat: -1,
    repeatDelay: 1,
    ease: Power0.easeNone,
    bezier: values,
};
const texture = PIXI.Texture.from("line1");
const value2 = [
    { x: 0, y: 500 },
    { x: 200, y: 100 },
    { x: 400, y: 500 },
    { x: 600, y: 100 },
    { x: 800, y: 500 },
    { x: 1000, y: 100 },
    { x: 1200, y: 500 },
];
const limit = 50;
const value2Length = value2.length;
for (let i = 0; i < value2Length - 1; i++) {
    const v0 = value2[i];
    const v1 = value2[i + 1];
    for (let j = 1; j < limit; j++) {
        const x = v0.x + ((v1.x - v0.x) * j) / limit;
        const y = v0.y + ((v1.y - v0.y) * j) / limit;
        value2.push({ x, y });
    }
}
value2.sort((a, b) => a.x - b.x);

const line = new PIXI.mesh.Rope(texture, <any>value2);

app.stage.addChild(line);

// TweenMax.staggerTo(rope.points, 1, vars, 0.01);

//app.stage.addChild(sprite);
//app.stage.addChild(drawGraphics(value2));

/**
 * @description 繪製圓點
 * @param {{ x: number; y: number }[]} values
 * @return {*}  {PIXI.Graphics}
 */
function drawGraphics(values: { x: number; y: number }[]): PIXI.Graphics {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xde3249);
    values.forEach(({ x, y }) => graphics.drawCircle(x, y, 5));
    graphics.endFill();
    return graphics;
}

function createText(values: { x: number; y: number }[]): void {
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
}
