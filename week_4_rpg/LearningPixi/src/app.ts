import * as PIXI from "pixi.js-legacy";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

let app = new PIXI.Application({
  width: 512,
  height: 512,
  resolution: 1,
});

document.querySelector("#app")?.appendChild(app.view);

app.loader.add("cat.png", "../images/cat.png").load(setup);

//定義在多個函數中使用的任何變量
let cat: PIXI.Sprite;
let state;
function setup() {
  cat = PIXI.Sprite.from("cat.png");
  cat.y = 96;
  app.stage.addChild(cat);

  //捕獲鍵盤方向鍵
  let left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

  //左箭頭鍵`press`方法
  left.press = () => {
    //Change the cat's velocity when the key is pressed
    cat.vx = -5;
    cat.vy = 0;
  };

  //Left arrow key `release` method
  left.release = () => {
    //If the left arrow has been released, and the right arrow isn't down,
    //and the cat isn't moving vertically:
    //Stop the cat
    if (!right.isDown && cat.vy === 0) {
      cat.vx = 0;
    }
  };

  //Up
  up.press = () => {
    cat.vy = -5;
    cat.vx = 0;
  };
  up.release = () => {
    if (!down.isDown && cat.vx === 0) {
      cat.vy = 0;
    }
  };

  //Right
  right.press = () => {
    cat.vx = 5;
    cat.vy = 0;
  };
  right.release = () => {
    if (!left.isDown && cat.vy === 0) {
      cat.vx = 0;
    }
  };

  //Down
  down.press = () => {
    cat.vy = 5;
    cat.vx = 0;
  };
  down.release = () => {
    if (!up.isDown && cat.vx === 0) {
      cat.vy = 0;
    }
  };
  state = play;
  app.ticker.add((delta) => gameLoop(delta));
}

function gameLoop(delta) {
  //Update the current game state:
  state(delta);
}

function play(delta) {
  //Use the cat's velocity to make it move
  cat.x += cat.vx;
  cat.y += cat.vy;
}

class Key {
  isDown = false;
  isUp = true;
  press = undefined;
  release = undefined;
  downHandler = (event: KeyboardEvent) => {
    if (event. === this.code) {
      if (this.isUp && this.press) this.press();
      this.isDown = true;
      this.isUp = false;
    }
    event.preventDefault();
  };
  upHandler = (event) => {
    if (event.keyCode === this.code) {
      if (this.isDown && this.release) this.release();
      this.isDown = false;
      this.isUp = true;
    }
    event.preventDefault();
  };
  constructor(private code: number) {
    window.addEventListener("keydown", this.downHandler.bind(this), false);
    window.addEventListener("keyup", this.upHandler.bind(this), false);
  }
}

//`keyboard` 輔助函數
function keyboard(keyCode: number) {
  //The `downHandler`
  //The `upHandler`

  //A附加事件偵聽器

  return key;
}
