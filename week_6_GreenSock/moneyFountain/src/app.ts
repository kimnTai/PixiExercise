import * as PIXI from "pixi.js-legacy";
import { gsap } from "gsap";
import { Application, Container, filters, Sprite } from "pixi.js-legacy";
import { Money } from "./Money";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

class App {
  private app = new Application({
    width: 1280 / 1.5,
    height: 720 / 1.5,
  });
  private container = new Container();
  constructor() {
    document.querySelector("#app")?.appendChild(this.app.view);
    document.querySelector("button").addEventListener("click", () => {
      this.restart();
    });
    this.setup();
    this.addTicker();
  }

  /**設置 Sprite 到舞台 */
  setup(): void {
    for (let i = 0; i < 180; i++) {
      const money = new Money();

      money.scale.set(0.2);
      // X 方向 4 - 12 之間的隨機速度
      money.speedX = (6 + Math.random() * 6) * -1;
      // 向上初速度 30
      money.speedY = 18 * -1;
      // 張角 90度
      money.direction = 100;
      money.skew;
      // 設置在螢幕中心下方
      money.position.set(
        this.app.screen.width / 2,
        this.app.screen.height + 50
      );
      this.container.addChild(money);
    }
    this.app.stage.addChild(this.container);
  }

  /**增加 ticker */
  addTicker(): void {
    // 計數器
    let count = 0;
    const container = this.container;
    const toFilter = this.toFilter;
    const angle = (Math.PI / 180) * 6;
    gsap.ticker.add(fn);
    function fn() {
      for (let i = 0; i < count; i++) {
        const money = container.children[i] as Money;
        money.y += money.computeY;
        money.x += money.computeX;
        money.rotation += Math.PI / 180;
        // 隨機往一個方向傾斜旋轉
        if (Math.random() > 0.5) {
          money.skew.x += angle;
        } else {
          money.skew.y += angle;
        }
        // 根據傾斜調整亮度
        toFilter(money);
      }
      if (count < container.children.length) {
        count++;
      }
    }

    setTimeout(() => {
      gsap.ticker.remove(fn);
      this.restart();
    }, 4500);
  }

  /**根據傾斜調整亮度 */
  toFilter(money: Sprite) {
    const skewXCos = Math.abs(Math.cos(money.skew.x % (Math.PI * 2)));
    const skewYSin = Math.abs(Math.sin(money.skew.y % (Math.PI * 2)));
    const filter = new filters.ColorMatrixFilter();
    money.filters = [filter];
    // 同時滿足為傾斜 => 降低亮度
    if (skewXCos < 0.7 && skewYSin > 0.7) {
      filter.brightness(0.9, false);
    } else {
      filter.brightness(1.1, false);
    }
  }

  /**重新開始 */
  restart(): void {
    this.app.stage.removeChildren(0);
    this.container = new Container();
    this.setup();
    this.addTicker();
  }
}

new App();
