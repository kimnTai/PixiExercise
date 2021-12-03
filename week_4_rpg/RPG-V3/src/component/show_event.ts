import { Container, Sprite, Texture } from "pixi.js";
import { app } from ".";

/**攻擊特效 */
function showAttack() {
  const attBtn = app.stage.getChildByName("攻擊按鈕") as Container;
  const player = app.stage.getChildByName("玩家");
  const attackBlack = Texture.from("attack_black.png");
  const attack = Texture.from("attack.png");
  // 攻擊者初始 x 座標
  const originX = player.x;
  const computer = app.stage.getChildByName("電腦");
  attBtn.interactive = false;
  (attBtn.children[0] as Sprite).texture = attackBlack;

  return new Promise((resolve) => {
    app.ticker.add(p1);
    /**向前移動 */
    function p1() {
      player.x += 10;
      if (player.x >= originX + 200) {
        app.ticker.remove(p1);
        app.ticker.add(p2);
      }
    }
    /**向後移動 */
    function p2() {
      player.x -= 10;
      if (player.x <= originX) {
        app.ticker.remove(p2);
        attBtn.interactive = true;
        (attBtn.children[0] as Sprite).texture = attack;
        resolve("已完成");
      }
    }
  });
}

/**死亡轉角度，str: 玩家 = 4、NPC = 5 */
function showDeath(str: "玩家" | "電腦") {
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

export { showAttack, showDeath };
