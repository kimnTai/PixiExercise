import * as PIXI from "pixi.js";
import "pixi-spine";

const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader
    .add("bunny", "../img/bunny.png")
    .add("effect", "../demo/01_json/effect_style136.json")
    .add("moreSpin", "../demo/more2/moreSpin.json")
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

    const spine = new PIXI.spine.Spine(app.loader.resources.moreSpin.spineData);
    const [five, ten] = spine.spineData.skins.map(({ name }) => name);
    spine.skeleton.setSkinByName(ten);
    spine.update(0);
    ["num/6", "num/plus"].map((v) => spine.skeleton.findSlot(v).currentSprite).forEach((v) => (v.texture = null));
    const { currentSprite } = spine.skeleton.findSlot("num/7");
    const num = new PIXI.extras.BitmapText("+99", { font: `${currentSprite.height}px num_jp_79_yl` });

    currentSprite.addChild(num).anchor = new PIXI.Point(1, 0.5);
    num.x = currentSprite.x;
    currentSprite.texture = null;
    spine.state.addAnimation(0, "L", true, 0);
    app.stage.addChild(spine).position.set(400, 300);
}
