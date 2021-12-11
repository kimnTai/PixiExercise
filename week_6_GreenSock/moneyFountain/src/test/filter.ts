import { Application, filters } from "pixi.js-legacy";
import { Money } from "../Money";

function test(app: Application): void {
  const money = new Money();

  money.scale.set(0.4);
  money.position.set(100, 300);

  app.stage.addChild(money);

  //sprite.skew.x = 3.14;

  app.ticker.add(() => {
    const filter = new filters.ColorMatrixFilter();
    money.filters = [filter];
    const skewXCos = Math.abs(Math.cos(money.skew.x % (Math.PI * 2)));
    const skewYSin = Math.abs(Math.sin(money.skew.y % (Math.PI * 2)));

    if (skewYSin > 0.7) {
      filter.brightness(1.5, false);
    } else {
      filter.brightness(0.9, false);
    }
    money.skew.y += (Math.PI / 180) * 1;
  });
}
