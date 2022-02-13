import { Dict } from "@pixi/utils";
import { Application, Container, LoaderResource, Sprite, TickerCallback } from "pixi.js-legacy";
import { Coin } from "./Coin";

class App extends Application {
  private container = new Container();
  private resources: Dict<LoaderResource>;

  constructor() {
    super({ width: 1280, height: 720 });
    document.querySelector("#app")?.appendChild(this.view);
    this.init();
  }

  init(): void {
    this.loader.add("coin", "../export/coin-pro.json").load((loader, resources) => {
      this.resources = resources;
      this.createCoin();
    });
    this.setBackground();
    this.addShow();
  }

  setBackground(): void {
    const bg = Sprite.from("../img/bg_final.png");
    bg.scale.set(this.screen.width / 1920);
    this.stage.addChild(bg);
  }

  createCoin(): void {
    const { resources, screen, container, stage } = this;
    const max = 15;
    for (let i = 0; i < max; i++) {
      const coin = new Coin(resources["coin"].spineData);
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
      coin.position.set(screen.width / 2, screen.height + 50);
      container.addChild(coin);
    }
    stage.addChild(container);
  }

  /**增加 ticker */
  addShow(): void {
    const { container, ticker } = this;
    // 計數器
    let count = 0;
    const fallDown = (time: number) => {
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
    };
    ticker.add(fallDown);
    this.reSet(fallDown);
  }

  async reSet(fallDown: TickerCallback<number>): Promise<void> {
    const { ticker, container } = this;
    await this.sleep(4500);
    ticker.remove(fallDown);
    container.removeChildren(1);
    this.createCoin();
    this.addShow();
  }

  sleep(time: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
}

export default App;
