import { Application, Container, Sprite } from "pixi.js-legacy";

class App extends Application {
  container = new Container();
  constructor() {
    super({
      width: 1280,
      height: 720,
    });
    document.querySelector("#app")?.appendChild(this.view);
    this.loader.add("coin", "../export/coin-pro.json");
    this.setBackground();
  }
  setBackground() {
    const bg = Sprite.from("../img/bg_final.png");
    bg.scale.set(this.screen.width / 1920);
    this.stage.addChild(bg);
  }
}

export { App };
