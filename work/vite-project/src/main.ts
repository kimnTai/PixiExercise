import * as PIXI from "pixi.js";
import { Power0, TweenMax } from "gsap";

const app = new PIXI.Application({ width: 1200, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader.add("line", "../img/FX_Line-2.png").load(() => {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xde3249);
    const values = Array.from({ length: 7 }, (_, i) => {
        const index = Math.floor(Math.random() * 3);
        graphics.drawCircle((i * app.view.width) / 6, [100, 300, 500][index], 5);
        return {
            x: (i * app.view.width) / 6,
            y: [100, 300, 500][index],
        };
    });
    graphics.endFill();
    const point = Array.from({ length: 100 }, () => ({ ...values[0] } as PIXI.Point));
    const rope = new PIXI.mesh.Rope(PIXI.Texture.from("line"), point);
    const vars = {
        repeat: -1,
        repeatDelay: 1,
        ease: Power0.easeNone,
        bezier: values,
    };
    const container = new PIXI.Container();
    const textArray = Array.from({ length: 20 }, () => {
        const basicText = new PIXI.Text("X2");
        basicText.position.set(values[0].x, values[0].y);
        basicText.anchor.set(0.5);
        container.addChild(basicText);
        return basicText;
    });

    TweenMax.staggerTo(rope.points, 1, vars, 0.01);
    TweenMax.staggerTo(textArray, 1, vars, 0.05);

    app.stage.addChild(rope);
    app.stage.addChild(graphics);
    app.stage.addChild(container);
});
