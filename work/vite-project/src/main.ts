import * as PIXI from "pixi.js";
import Container from "./container";
import "pixi-spine";

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

function createBox(color: number, w: number, h: number, name: string) {
    const box = new PIXI.Graphics().beginFill(color).drawRect(0, 0, w, h).endFill();
    box.name = name;
    box.addChild(new PIXI.Text(name, { fontSize: 24, fill: 0xffffff }));
    (<any>box).zIndex = 0;
    return box;
}

app.loader
    .add("bunny", "../img/bunny.png")
    .add("effect", "../demo/01_json/effect_style136.json")
    .add("moreSpin", "../demo/more2/moreSpin.json")
    .add("symbol", "../demo/symbol/symbol.json")
    .add("test", "../img/video2.mp4")
    .add("num_03", "../demo/num/num_03.fnt")
    .add("num_jp_79_yl", "../demo/num/num_jp_79_yl.fnt")
    .load(setup);

async function setup() {
    const text = app.stage.addChild(new PIXI.Text("0"));
    text.position.set(300, 0);
    const close = app.stage.addChild(PIXI.Sprite.from("bunny"));
    close.x = 500;
    close.interactive = text.interactive = true;
    close.on("pointerup", () => app.stage.removeChild(app.stage.getChildByName("video")));
    const video = app.loader.resources.test.data as HTMLVideoElement;
    video.muted = video.loop = true;
    const videoSprite = new PIXI.Sprite(PIXI.Texture.fromVideo(video));
    videoSprite.name = "video";
    text.on("pointerup", () => app.stage.addChild(videoSprite));

    const spine = new PIXI.spine.Spine(app.loader.resources.symbol.spineData);
    // spine.skeleton.setSkinByName("10");
    // spine.update(0);
    // const { currentSprite } = spine.skeleton.findSlot("num/7");
    // const num = new PIXI.extras.BitmapText("+99", { font: `${currentSprite.height}px num_jp_79_yl` });
    // currentSprite.addChild(num).anchor = new PIXI.Point(1, 0.5);
    //num.x = currentSprite.x;
    // ["num/plus", "num/6", "num/7"]
    //     .map((v) => spine.skeleton.findSlot(v).currentSprite)
    //     .forEach((v) => (v.texture = null));
    spine.state.addAnimation(0, "symbol16_crush", true, 0);
    app.stage.addChild(spine).position.set(400, 300);
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
