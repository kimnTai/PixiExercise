import { Application, Text } from "pixi.js-legacy";
import { Money } from "../Money";

export function ScaleSkew(app: Application): void {
  const sprite = new Money();
  const sprite2 = new Money();
  const sprite3 = new Money();
  const sprite4 = new Money();
  sprite.scale.set(0.4);
  sprite.position.set(100, 300);
  sprite2.scale.set(0.4);
  sprite2.position.set(250, 300);
  sprite3.scale.set(0.4);
  sprite3.position.set(400, 300);
  sprite4.scale.set(0.4);
  sprite4.position.set(550, 300);
  app.stage.addChild(sprite, sprite2, sprite3, sprite4);
  let sign = 1;
  let count = 0;

  const text = new Text("scale", { fill: 0xffffff });
  text.position.set(150, 200);
  const text2 = new Text("skew", { fill: 0xffffff });
  text2.position.set(450, 200);
  app.stage.addChild(text, text2);

  app.ticker.add(() => {
    if (count == 80) {
      sign = -1;
    } else if (count == 160) {
      sign = 1;
      count = 0;
    }

    sprite.scale.x += (-0.01 / 2) * sign;
    sprite2.scale.y += (-0.01 / 2) * sign;
    sprite3.skew.x += 0.05;
    sprite4.skew.y += 0.05;
    count++;
  });
}
