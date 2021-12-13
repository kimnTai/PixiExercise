import * as PIXI from "pixi.js-legacy";
import { gsap } from "gsap";
import { Coin } from "./Coin";
import { App } from "./app";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new App();
app.loader.load(createCoin);
addShow();

/**設置 Spine 到舞台 */
function createCoin(load: PIXI.Loader, res: any) {
  for (let i = 0; i < 180; i++) {
    const coin = new Coin(res.coin.spineData);
    coin.scale.set(0.2);
    coin.state.setAnimation(0, "animation", true);
    coin.autoUpdate = false;

    // 起始隨機動畫
    coin.update(Math.random() * 3);
    // 重力設置 (默認 9.8 / 30)
    coin.gravity = 9.8 / 30;
    // X 方向 6 - 12 之間的隨機速度
    coin.speedX = 6 + Math.random() * 6;
    // 向上初速度 20
    coin.speedY = 20 * -1;
    // 張角 90度
    coin.direction = 100;
    // 設置在螢幕中心下方
    coin.position.set(app.screen.width / 2, app.screen.height + 50);
    app.container.addChild(coin);
  }
  app.stage.addChild(app.container);
}

/**增加 ticker */
function addShow(): void {
  // 計數器
  let count = 0;
  const container = app.container;
  gsap.ticker.add(fn);
  function fn() {
    for (let i = 0; i < Math.ceil(count); i++) {
      const coin = container.children[i] as Coin;
      coin.y += coin.computeY;
      coin.x += coin.computeX;
      coin.rotation += Math.PI / 180;
      coin.update(2 / 60);
    }
    if (count < container.children.length) {
      count += 0.7;
    }
  }

  setTimeout(() => {
    gsap.ticker.remove(fn);
    app.container.removeChildren(1);
    app.loader.load(createCoin);
    addShow();
  }, 4500);
}
