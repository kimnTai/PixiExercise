import { Application, Container, Sprite, Text, Texture } from "pixi.js";

function showAttack(app: Application) {
  const attBtn = app.stage.children[2] as Container;
  const attack = Texture.from("attack.png");
  const attackBlack = Texture.from("attack_black.png");
  // 攻擊者初始 x 座標
  const originX = app.stage.children[3].x;
  attBtn.interactive = false;
  (attBtn.children[0] as Sprite).texture = attackBlack;
  app.ticker.add(p1);
  /**向前移動 */
  function p1() {
    app.stage.children[3].x += 10;
    if (app.stage.children[3].x >= originX + 200) {
      app.ticker.remove(p1);
      app.ticker.add(p2);
    }
  }
  /**向後移動 */
  function p2() {
    app.stage.children[3].x -= 10;
    if (app.stage.children[3].x <= originX) {
      app.ticker.remove(p2);
      attBtn.interactive = true;
      (attBtn.children[0] as Sprite).texture = attack;
      showDeath(app);
    }
  }
}

function showDeath(app: Application) {
  //app.stage.children[3].angle = -90;
  app.stage.children[4].angle = 90;
}

export { showAttack, showDeath };
