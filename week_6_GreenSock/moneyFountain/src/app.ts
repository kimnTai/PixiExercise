import { Application, Container, Sprite } from "pixi.js-legacy";
import { Coin } from "./Coin";

class App extends Application {
  private container = new Container();
  constructor() {
    super({
      width: 1280,
      height: 720,
    });
    document.querySelector("#app")?.appendChild(this.view);
  }

  init(): void {
    this.loader
      .add("coin", "../export/coin-pro.json")
      .load((loader, resources) => {
        this.createCoin(resources);
      });
    this.setBackground();
    this.addShow();
  }

  setBackground(): void {
    const bg = Sprite.from("../img/bg_final.png");
    bg.scale.set(this.screen.width / 1920);
    this.stage.addChild(bg);
  }

  createCoin(res: any): void {
    for (let i = 0; i < 15; i++) {
      const coin = new Coin(res.coin.spineData);
      coin.scale.set(0.2);
      coin.state.setAnimation(0, "animation", true);
      // 旋轉速度
      coin.state.timeScale = 3;
      // 起始隨機動畫
      coin.update(Math.random() * 3);
      // X 方向 6 - 12 之間的隨機速度
      coin.speedX = 6 + Math.random() * 6;
      // 向上初速度 20
      coin.speedY = 20 * -1;
      // 張角 90度
      coin.direction = 100;
      // 設置在螢幕中心下方
      coin.position.set(this.screen.width / 2, this.screen.height + 50);
      this.container.addChild(coin);
    }
    this.stage.addChild(this.container);
  }

  /**增加 ticker */
  addShow(): void {
    // 計數器
    let count = 0;
    const container = this.container;
    this.ticker.add(fn);

    function fn(time: number) {
      for (let i = 0; i < Math.ceil(count); i++) {
        const coin = container.children[i] as Coin;
        // 重力設置 (默認 9.8 / 30)
        coin.gravity = (9.8 / 30) * time;
        coin.y += coin.computeY * time;
        coin.x += coin.computeX * time;
        coin.rotation += (Math.PI / 180) * time;
      }
      if (count < container.children.length) {
        count += 0.5;
      }
    }
    setTimeout(() => {
      this.ticker.remove(fn);
      this.container.removeChildren(1);
      this.loader.load((loader, resources) => {
        this.createCoin(resources);
      });
      this.addShow();
    }, 4500);
  }
}

export { App };
