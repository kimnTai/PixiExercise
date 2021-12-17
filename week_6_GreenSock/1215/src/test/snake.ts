import * as PIXI from "pixi.js-legacy";

function snake(app: PIXI.Application) {
  const num = 20;
  const ropeLength = 918 / num;
  const points: PIXI.Point[] = [];
  for (let i = 0; i < num; i++) {
    points.push(new PIXI.Point(i * ropeLength, 0));
  }
  const strip = new PIXI.SimpleRope(
    PIXI.Texture.from("../img/snake.png"),
    points
  );
  strip.scale.set(0.5);
  strip.position.set(10, 300);
  app.stage.addChild(strip);

  let count = 0;
  app.ticker.add(() => {
    count += 0.1;
    for (let i = 0; i < points.length; i++) {
      points[i].y = Math.sin(i * 0.5 + count) * 30;
      points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 20;
    }
  });
}
