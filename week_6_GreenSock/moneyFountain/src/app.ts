import * as PIXI from "pixi.js-legacy";
import { gsap } from "gsap";
import { Application, ParticleContainer } from "pixi.js-legacy";
import { Money } from "./Money";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

class App {
  private app = new Application({
    width: 1280 / 1.5,
    height: 720 / 1.5,
  });
  private sprites = new ParticleContainer(1000, {
    scale: true,
    position: true,
    rotation: true,
    uvs: true,
    alpha: true,
  });
  constructor() {
    document.querySelector("#app")?.appendChild(this.app.view);
    document.querySelector("button").addEventListener("click", () => {
      this.button();
    });
    this.setup();
    this.addTicker();
  }

  setup(): void {
    for (let i = 0; i < 180; i++) {
      const money = new Money();
      money.scale.set(0.3 + Math.random() * 0.1);
      // 設置在螢幕中心下方
      money.position.set(
        this.app.screen.width / 2,
        this.app.screen.height + 50
      );
      this.sprites.addChild(money);
    }
    this.app.stage.addChild(this.sprites);
  }

  addTicker(): void {
    // 重力加速度
    const g = 1;
    // 計數器
    let count = 0;
    const sprites = this.sprites;
    gsap.ticker.add(p1);
    function p1() {
      for (let i = 0; i < count; i++) {
        const money = sprites.children[i] as Money;
        money.speedY = money.speedY + g;
        if (money.speedY > 15) {
          // 末速 = 15
          money.speedY = 15;
        }
        money.y += Math.sin(money.direction) * money.speedY;
        money.x += Math.cos(money.direction) * money.speedX;
        money.rotation = -money.direction + Math.PI;
      }
      if (count < 180) {
        count++;
      }
    }

    setTimeout(() => {
      gsap.ticker.remove(p1);
      this.button();
    }, 4500);
  }

  button(): void {
    this.app.stage.removeChildren(0);
    this.sprites = new ParticleContainer(1000, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true,
    });
    this.setup();
    this.addTicker();
  }
}

new App();
