import * as PIXI from "pixi.js";
import { Power0, TweenMax } from "gsap";

const app = new PIXI.Application({ width: 1200, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader
    .add("line", "../img/FX_Line-2.png")
    .add("line1", "../img/pic_main_line_1.png")
    .add("rope2", "../img/rope2.png")
    .load(() => {
        const values = Array.from({ length: 7 }, (_, i) => {
            const index = Math.floor(Math.random() * 3);
            return {
                x: (i * app.view.width) / 6,
                y: [100, 300, 500][index],
            };
        });
        const point = Array.from({ length: 100 }, () => ({ ...values[0] } as PIXI.Point));
        const rope = new PIXI.mesh.Rope(PIXI.Texture.from("line"), point);
        const vars = {
            repeat: -1,
            repeatDelay: 1,
            ease: Power0.easeNone,
            bezier: values,
        };
        const texture = PIXI.Texture.from("line1");
        const rope2 = new PIXI.extras.TilingSprite(PIXI.Texture.from("rope2"), 1920);
        const value2 = [
            { x: 0, y: 500 },
            { x: 200, y: 100 },
            { x: 400, y: 500 },
            { x: 600, y: 100 },
            { x: 800, y: 500 },
            { x: 1000, y: 100 },
            { x: 1200, y: 500 },
        ];
        const limit = 500;
        const value2Length = value2.length;
        for (let i = 0; i < value2Length - 1; i++) {
            const v0 = value2[i];
            const v1 = value2[i + 1];
            for (let j = 1; j < limit; j++) {
                const x = v0.x + ((v1.x - v0.x) * j) / limit;
                const y = v0.y + ((v1.y - v0.y) * j) / limit;
                value2.push({ x, y });
            }
        }
        value2.sort((a, b) => a.x - b.x);

        const line = new PIXI.mesh.Rope(texture, <any>value2);

        app.stage.addChild(line);

        // TweenMax.staggerTo(rope.points, 1, vars, 0.01);

        //app.stage.addChild(sprite);
        //app.stage.addChild(drawGraphics(value2));
    });

/**
 * @description 繪製圓點
 * @param {{ x: number; y: number }[]} values
 * @return {*}  {PIXI.Graphics}
 */
function drawGraphics(values: { x: number; y: number }[]): PIXI.Graphics {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xde3249);
    values.forEach(({ x, y }) => graphics.drawCircle(x, y, 5));
    graphics.endFill();
    return graphics;
}

function createText(values: { x: number; y: number }[]): void {
    const container = new PIXI.Container();
    const textArray = Array.from({ length: 20 }, () => {
        const basicText = new PIXI.Text("X2");
        basicText.position.set(values[0].x, values[0].y);
        basicText.anchor.set(0.5);
        container.addChild(basicText);
        return basicText;
    });
    app.stage.addChild(container);
}
