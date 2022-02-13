import { Application, Graphics, TextStyle, Text, Container, Sprite } from "pixi.js";

const style = {
  width: 600,
  height: 600,
  antialias: true,
  resolution: 1,
  backgroundColor: 0x08294a,
};

export default class App extends Application {
  constructor() {
    super(style);
    this.init().then(() => {
      this.createSprite();
      this.createButton();
      this.createTop();
    });
  }

  init(): Promise<unknown> {
    return new Promise((resolve) => {
      document.querySelector("#app").appendChild(this.view);
      this.loader
        .add("one", "../img/one.png")
        .add("two", "../img/two.png")
        .add("three", "../img/three.png")
        .add("four", "../img/four.png")
        .load(resolve);
    });
  }

  /**底部按鈕 */
  createButton(): void {
    const style = new TextStyle({
      fontSize: 36,
      fill: ["#ffffff", "#ffdd00"],
    });
    const text = new Text("開始 !", style);
    text.anchor.set(0.5, 0.5);
    text.position.set(this.screen.width / 2, 540);
    const button = new Graphics();
    button.beginFill(0, 1);
    button.drawRect(0, 480, this.screen.width, 120);
    button.interactive = true;
    button.addListener("click", () => {
      console.log("test");
    });
    this.stage.addChild(button, text);
  }

  createSprite(): void {
    const textures = ["one", "two", "three", "four"];
    // 5行
    for (let j = 0; j < 5; j++) {
      const container = new Container();
      // 6 列
      for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 4);
        const sprite = Sprite.from(textures[random]);
        // 圖片大小 200px 縮成 100px
        sprite.scale.set(100 / 200, 100 / 200);
        sprite.anchor.set(0.5, 0.5);
        // 600 / 5 = 120px，置中 60px
        sprite.x += 120 * j + 60;
        sprite.y += 120 * i + 60 - 120;
        container.addChild(sprite);
      }
      this.stage.addChild(container);
    }
  }

  createTop(): void {
    const style = new TextStyle({
      fontSize: 36,
      fill: ["#ffffff", "#ffdd00"],
    });
    const text = new Text("角子老虎機 !", style);
    text.anchor.set(0.5, 0.5);
    text.position.set(this.screen.width / 2, 60);
    const top = new Graphics();
    top.beginFill(0, 1);
    top.drawRect(0, 0, this.screen.width, 120);

    this.stage.addChild(top, text);
  }
}
