import gsap from "gsap";
import * as PIXI from "pixi.js-legacy";
import { Application } from "pixi.js-legacy";

function baseGSAP(app: Application): void {
  const texture = PIXI.Texture.from("../img/bunny.png");
  const time = 2;

  // x 0~500
  const bunny1 = new PIXI.Sprite(texture);
  gsap.to(bunny1, {
    x: 500,
    duration: time,
    repeat: -1,
    yoyo: true,
  });

  // alpha 1~0
  const bunny2 = new PIXI.Sprite(texture);
  bunny2.y = 100;
  gsap.to(bunny2, {
    alpha: 0,
    duration: time,
    repeat: -1,
    yoyo: true,
  });
  // scale 1~2
  const bunny3 = new PIXI.Sprite(texture);
  bunny3.y = 200;
  gsap.to(bunny3.scale, {
    x: 2,
    y: 2,
    duration: time,
    repeat: -1,
    yoyo: true,
  });

  // 轉 2*PI
  const bunny4 = new PIXI.Sprite(texture);
  bunny4.position.set(350, 100);
  bunny4.anchor.set(0.5, 0.5);
  gsap.to(bunny4, {
    rotation: 2 * Math.PI,
    duration: time,
    repeat: -1,
    yoyo: true,
  });

  function createNewBunny() {
    const colorBunny = new PIXI.Sprite(texture);
    colorBunny.position.set(50, 500);
    colorBunny.tint = parseInt(
      `0x${Math.floor(Math.random() * 16777215).toString(16)}`
    );
    gsap.to(colorBunny, {
      x: 500,
      duration: time,
      onComplete: () => {
        app.stage.removeChild(colorBunny);
        createNewBunny();
      },
    });
    app.stage.addChild(colorBunny);
  }
  createNewBunny();
  app.stage.addChild(bunny1, bunny2, bunny3, bunny4);
}
