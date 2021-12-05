import { Container, Sprite, Texture } from "pixi.js";
import { app } from ".";

/**攻擊特效 */
function showAttack(str: string): Promise<unknown> {
  const attacker = (app.stage.getChildByName(str) as Container).children[0];
  const originX = attacker.x;
  let move = 1;
  if (str == "電腦") {
    move = -1;
  }
  changeButtonImage();
  return new Promise((resolve) => {
    app.ticker.add(p1);
    /**向前移動 */
    function p1() {
      attacker.x += 10 * move;
      if (attacker.x == originX + 200 * move) {
        app.ticker.remove(p1);
        app.ticker.add(p2);
      }
    }
    /**向後移動 */
    function p2() {
      attacker.x -= 10 * move;
      if (attacker.x == originX * move) {
        app.ticker.remove(p2);
        changeButtonImage();
        resolve("已完成");
      }
    }
  });
}

/**交換攻擊按紐圖片 */
function changeButtonImage() {
  const attBtn = app.stage.getChildByName("攻擊按鈕") as Container;
  const attackBlack = Texture.from("attack_black.png");
  const attack = Texture.from("attack.png");
  if (attBtn.interactive) {
    attBtn.interactive = false;
    (attBtn.children[0] as Sprite).texture = attackBlack;
  } else {
    attBtn.interactive = true;
    (attBtn.children[0] as Sprite).texture = attack;
  }
}

/**死亡轉角度 */
function showDeath(str: "玩家" | "電腦"): Promise<unknown> {
  const container = app.stage.getChildByName(str) as Container;
  return new Promise((resolve) => {
    // 如果 玩家 死亡 => 往後轉 90度
    if (str == "玩家") {
      app.ticker.add(p1);
    } else {
      app.ticker.add(p2);
    }
    /**往後轉 90度 */
    function p1() {
      container.children[0].angle -= 1;
      if (container.children[0].angle <= -90) {
        app.ticker.remove(p1);
        resolve("已完成");
      }
    }
    /**往前轉 90度 */
    function p2() {
      container.children[0].angle += 1;
      if (container.children[0].angle >= 90) {
        app.ticker.remove(p2);
        resolve("已完成");
      }
    }
  });
}

/**暈眩旋轉特效 - BUG太多棄用 */
function showDizzy(): Promise<unknown> {
  return new Promise((resolve) => {
    const container = app.stage.getChildByName("玩家") as Container;
    app.ticker.add(p1);
    function p1() {
      container.children[0].angle -= 1;
      if (container.children[0].angle <= -30) {
        app.ticker.remove(p1);
        app.ticker.add(p2);
      }
    }
    function p2() {
      container.children[0].angle += 1;
      if (container.children[0].angle >= 30) {
        app.ticker.remove(p2);
        app.ticker.add(p3);
      }
    }
    function p3() {
      container.children[0].angle -= 1;
      if (container.children[0].angle <= 0) {
        app.ticker.remove(p3);
        resolve("已完成");
      }
    }
  });
}

export { showAttack, showDeath, showDizzy };
