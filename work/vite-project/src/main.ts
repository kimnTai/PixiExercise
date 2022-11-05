import * as PIXI from "pixi.js";
import Container from "./container";

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

function createBox(color: number, w: number, h: number, name: string) {
    const box = new PIXI.Graphics().beginFill(color).drawRect(0, 0, w, h).endFill();
    box.name = name;
    box.addChild(new PIXI.Text(name, { fontSize: 24, fill: 0xffffff }));
    (<any>box).zIndex = 0;
    return box;
}

const box1 = createBox(0xff0000, 100, 100, "box1");
const box2 = createBox(0xff9900, 100, 100, "box2");
const box3 = createBox(0x000000, 100, 100, "box3");

box1.position.set(20, 20);
box2.position.set(70, 90);
box3.position.set(20, 110);

const container = app.stage.addChild(new Container());

container.addChild(box1, box2, box3);

const { width } = PIXI.TextMetrics.measureText("你的文字1234", new PIXI.TextStyle({ fontSize: 24, align: "center" }));

container.children.forEach((child, index) => {
    console.log(index, child.name);
});

setTimeout(() => {
    container.setChildIndex([...container.children].pop() as PIXI.DisplayObject, 0);
    container.children.forEach((child, index) => {
        console.log(index, child.name);
    });
}, 1000);
