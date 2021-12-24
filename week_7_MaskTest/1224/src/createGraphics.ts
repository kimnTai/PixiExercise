import * as PIXI from "pixi.js-legacy";

export function createGraphics(app: PIXI.Application) {
  const graphics = new PIXI.Graphics();
  graphics.x = 200 + Math.random() * (app.screen.width - 300);
  graphics.y = 200 + Math.random() * (app.screen.height - 300);
  graphics.lineStyle(0);
  let count = 0;
  graphics.beginFill(0x8bc5ff, 0.4);
  graphics.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
  graphics.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
  graphics.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
  graphics.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
  //   app.ticker.add(() => {
  //     graphics.rotation = count * 0.1;
  //     count += 0.1;
  //   });
  return graphics;
}
