import * as PIXI from "pixi.js";
import "pixi-spine";

const app = new PIXI.Application({ backgroundColor: 0x1099bb });

document.body.appendChild(app.view);

app.loader
    .add("bunny", "../img/bunny.png")
    .add("effect", "../demo/01_json/effect_style136.json")
    .add("moreSpin", "../demo/more2/moreSpin.json")
    .add("symbol", "../demo/symbol/symbol.json")
    .add("symbol20", "../demo/symbol/symbol20.json")
    .add("test", "../img/video2.mp4")
    .add("num_03", "../demo/num/num_03.fnt")
    .add("num_jp_79_yl", "../demo/num/num_jp_79_yl.fnt")
    .add("num_jp_53_bu", "../demo/num/num_jp_53_bu.fnt")
    .add("FX_Line-2", "../img/FX_Line-2.png")
    .load(setup);

async function setup() {
    {
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
    }
}

function createBox(color: number, w: number, h: number, name: string) {
    const box = new PIXI.Graphics().beginFill(color).drawRect(0, 0, w, h).endFill();
    box.name = name;

    box.addChild(new PIXI.Text(name, { fontSize: 24, fill: 0xffffff }));
    (<any>box).zIndex = 0;

    return box;
}

function color(app: PIXI.Application) {
    const spine = new PIXI.spine.Spine(app.loader.resources.symbol20.spineData);
    spine.update(0);
    const { currentSprite } = spine.skeleton.findSlot("Symbol21");
    const num = new PIXI.extras.BitmapText("0", { font: `${200}px num_jp_53_bu` });
    const num2 = new PIXI.extras.BitmapText("0", { font: `${200}px num_jp_53_bu` });
    num.anchor = new PIXI.Point(0.5, 0.5);
    num.position.set(150 * 2, 0);

    currentSprite.addChild(num);
    currentSprite.position.set(-currentSprite.width * 0.5, 0);
    spine.state.addAnimation(0, "online", true, 0);
    spine.state.addListener({
        complete: () => {
            [num, num2].forEach((v) => (v.text = `${+v.text + 1}`));
            spine.hackTextureBySlotName(
                "Symbol21",
                app.renderer.generateTexture(num2),
                new PIXI.Rectangle(0, 0, num2.width, num2.height)
            );
        },
    });
    app.stage.addChild(spine).position.set(400, 300);
}

function freeAddTime(app: PIXI.Application) {
    const spine = new PIXI.spine.Spine(app.loader.resources.moreSpin.spineData);
    spine.skeleton.setSkinByName("10");
    spine.update(0);
    const { width, height } = spine.skeleton.findSlot("num/7").currentSprite;
    const num = new PIXI.extras.BitmapText("+0", { font: `${height}px num_jp_79_yl` });

    spine.state.addAnimation(0, "L", true, 0);
    app.stage.addChild(spine).position.set(400, 300);
    ["num/plus", "num/6"].map((v) => spine.skeleton.findSlot(v).currentSprite).forEach((v) => (v.texture = null));
    spine.state.addListener({
        complete: () => {
            num.text = `+${Number(num.text.replace(/[^0-9]/g, "")) + 1}`;
            spine.skeleton.findSlot("num/7").currentSprite.x = num.width * -0.5 + width;
            spine.hackTextureBySlotName(
                "num/7",
                app.renderer.generateTexture(num),
                new PIXI.Rectangle(0, 0, num.width, num.height)
            );
        },
    });
}

function zIndex() {
    // const box1 = createBox(0xff0000, 100, 100, "box1");
    // const box2 = createBox(0xff9900, 100, 100, "box2");
    // const box3 = createBox(0x000000, 100, 100, "box3");
    // box1.position.set(20, 20);
    // box2.position.set(70, 90);
    // box3.position.set(20, 110);
    // const container = new Container();
    // container.addChild(box1, box2, box3);
    // app.stage.addChild(PIXI.Sprite.from(container.generateTexture(app.renderer)));
    // const { width } = PIXI.TextMetrics.measureText("你的文字1234", new PIXI.TextStyle({ fontSize: 24, align: "center" }));
    // container.children.forEach((child, index) => {
    //     console.log(index, child.name);
    // });
    // setTimeout(() => {
    //     container.setChildIndex([...container.children].pop() as PIXI.DisplayObject, 0);
    //     container.children.forEach((child, index) => {
    //         console.log(index, child.name);
    //     });
    // }, 1000);
}
