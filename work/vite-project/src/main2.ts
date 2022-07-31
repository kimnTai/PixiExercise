import * as PIXI from "pixi.js";

const app = new PIXI.Application({ width: 1200, height: 600, backgroundColor: 0x1099bb });
document.querySelector("#app")?.appendChild(app.view);

app.loader.load(() => {
    // 畫圓
    let i = -Math.PI / 2;
    const graphics = new PIXI.Graphics();
    const fn = () => {
        i += (2 * Math.PI) / 300;
        graphics.clear();
        graphics.lineStyle(5, 0xaa00bb, 1);
        graphics.arc(600, 100, 50, -Math.PI / 2, i);
        graphics.endFill();
    };
    app.ticker.add(fn);
    setTimeout(() => app.ticker.remove(fn), 5050);
    app.stage.addChild(graphics);
});

export { app };
