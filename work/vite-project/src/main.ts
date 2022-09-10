import * as PIXI from "pixi.js";
import("pixi-spine");

const app = new PIXI.Application({ width: 1300, height: 700, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader
    .add("sprite", "../img/AnyConv.com__iP4_BGtile.webp")
    .add("mask", "../img/pic_mg_reelMaskSmall.png")
    .add("aaa", "../demo/spineboy-pro.skel")
    .add("effect", "../demo/02_skel/effect_style136.skel")
    .add("effect2", "../demo/01_json/effect_style136.json")
    .load(setup);

async function setup({ resources }: any) {
    await import("pixi-spine");
    await import("pixi-heaven");

    //new PIXI.spine.core.TextureAtlas(resources.effect.data);

    //const t = new PIXI.spine.Spine(resources.effect2.data);
    const container = new PIXI.Container();
    const t = new PIXI.heaven.Sprite(PIXI.Texture.from("sprite"));
    app.stage.addChild(t);
}

export default {};
