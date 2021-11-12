import * as PIXI from "pixi.js";
((doc) => {
  class Person {
    private sprite: PIXI.Sprite;
    constructor() {
      this.sprite = PIXI.Sprite.from("./src/img/L.png");
    }
    create(): PIXI.Sprite {
      return this.sprite;
    }
  }

  const init = (): void => {
    const app = new PIXI.Application({
      width: 750,
      height: 700,
      antialias: true,
      resolution: 1,
    });
    document.querySelector("#app").appendChild(app.view);
    const person = new Person().create();

    app.stage.addChild(person);
  };
  init();
})(document);
