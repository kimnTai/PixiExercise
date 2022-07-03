import * as PIXI from "pixi.js";
import { Spine, SpineParser } from "pixi-spine";

const app = new PIXI.Application({ width: 1200, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);
SpineParser.registerLoaderPlugin();
app.loader
    .add("line", "../img/FX_Line-2.png")
    .add("line1", "../img/pic_main_line_11.png")
    .add("rope2", "../img/rope2.png")

    .add("more", "../more/moreSpin.json")
    .load((_, res: any) => {
        console.log(res.more);

        // const boy = new Spine(res.more.spineData);
        // boy.position.set(700, 500);
        // boy.state.setAnimation(0, "bigWin_score", true);
        // app.stage.addChild(boy as any);
    });

export { app };
