import { Application, Container, Sprite, TickerCallback } from "pixi.js";
import { Coin } from "./Coin";

export default class App extends Application {
    private container = new Container();

    constructor() {
        super({ width: 1280, height: 720 });
        document.querySelector("#app")?.appendChild(this.view);
        this.init();
    }

    init(): void {
        this.loader.add("coin", "../export/coin-pro.json").load(() => {
            this.createCoin();
        });
        this.setBackground();
        this.addShow();
    }

    setBackground(): void {
        const bg = this.stage.addChild(Sprite.from("../img/bg_final.png"));
        bg.scale.set(this.screen.width / 1920);
    }

    createCoin(): void {
        const max = 50;
        for (let i = 0; i < max; i++) {
            const coin = new Coin(this.loader.resources["coin"].spineData);
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
        const fallDown = (time: number) => {
            for (let i = 0; i < Math.ceil(count); i++) {
                const coin = this.container.children[i] as Coin;
                // 重力設置 (默認 9.8 / 30)
                coin.gravity = (9.8 / 30) * time;
                coin.y += coin.computeY * time;
                coin.x += coin.computeX * time;
                coin.rotation += (Math.PI / 180) * time;
            }
            if (count < this.container.children.length) {
                count += 0.5;
            }
        };
        this.ticker.add(fallDown);
        this.reset(fallDown);
    }

    async reset(fallDown: TickerCallback<number>): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 4500));
        this.ticker.remove(fallDown);
        this.container.removeChildren(1);
        this.createCoin();
        this.addShow();
    }
}
