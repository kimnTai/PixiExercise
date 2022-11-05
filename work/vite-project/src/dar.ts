import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

app.loader
    .add("bunny", "../img/bunny.png")
    .add("effect", "../demo/01_json/effect_style136.json")
    .add("moreSpin", "../demo/more2/moreSpin.json")
    .add("test", "../img/video2.mp4")
    .add("num_03", "../demo/num/num_03.fnt")
    .add("num_jp_79_yl", "../demo/num/num_jp_79_yl.fnt")
    .load(setup);

function setup() {
    const slider = app.stage.addChild(
        new PIXI.Graphics().beginFill(0x38404e, 0.87).drawRect(-2, 0, 4, app.renderer.screen.height).endFill()
    );
    slider.position.set(12, 0);
    slider.interactive = true;

    const handle = slider.addChild(new PIXI.Graphics().beginFill(0xffffff).drawCircle(0, 0, 8).endFill());
    handle.interactive = true;
    handle.position.set(0, app.renderer.screen.height * 0.5);
    handle.addListener("pointerdown", () => {
        handle.parent.interactive = true;
        handle.parent.addListener("pointermove", onDrag);
    });
    handle.addListener("pointerup", () => {
        handle.parent.interactive = false;
        handle.parent.removeListener("pointermove", onDrag);
    });
    handle.addListener("pointerupoutside", () => {
        handle.parent.interactive = false;
        handle.parent.removeListener("pointermove", onDrag);
    });

    const bunny = app.stage.addChild(PIXI.Sprite.from("bunny"));
    bunny.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    bunny.scale.set(3);
    bunny.anchor.set(0.5);
    bunny.position.set(app.renderer.screen.width * 0.5, app.renderer.screen.height * 0.5);

    function onDrag({ data }: any) {
        handle.position.y = Math.max(4, Math.min(slider.toLocal(data.global).y, app.renderer.screen.height - 4));
        const t = 2 * (handle.position.y / app.renderer.screen.height - 0.5);
        bunny.scale.set(3 * (1.1 + t));
    }
}
