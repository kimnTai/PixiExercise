import * as PIXI from "pixi.js";
import "pixi-spine";

const app = new PIXI.Application({ width: 1500, height: 900, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader
    .add("bunny", "../img/bunny.png")
    .add("effect", "../demo/01_json/effect_style136.json")
    .add("moreSpin", "../demo/more2/moreSpin.json")
    .add("test", "../img/video2.mp4")
    .load(setup);

async function setup() {
    const text = new PIXI.Text("0");
    text.position.set(800, 0);
    app.stage.addChild(text);
    const close = PIXI.Sprite.from("bunny");
    app.stage.addChild(close).x = 700;
    close.interactive = text.interactive = true;
    const video = app.loader.resources.test.data as HTMLVideoElement;
    video.muted = video.loop = true;
    const test = PIXI.Texture.fromVideo(video);
    const videoSprite = new PIXI.Sprite(test);
    videoSprite.name = "video";
    text.on("pointerup", () => {
        app.stage.addChild(videoSprite);
    });
    close.on("pointerup", () => {
        app.stage.removeChild(app.stage.getChildByName("video"));
    });
}

export default {};
