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
    const num = new PIXI.extras.BitmapText("0", { font: "55px num_03" });
    app.stage.addChild(num);
}
