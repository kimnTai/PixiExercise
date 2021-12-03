import { Container, Sprite, Text } from "pixi.js-legacy";
import { Game } from "../game";
import { app } from ".";

/**攻擊按鈕設置 */
function attButton(): void {
  const container = new Container();
  container.name = "攻擊按鈕";
  const sprite = Sprite.from("attack.png");
  const text = new Text("攻擊", {
    fontSize: 50,
    fill: ["#000"],
  });
  sprite.anchor.set(0.5);
  text.anchor.set(0.5);
  container.addChild(sprite, text);
  container.interactive = true;
  container.addListener("click", () => {
    // 每 35 毫秒自動攻擊
    // autoAtt = window.setInterval(() => {
    // }, 35);
    Game.battle();
  });
  container.position.set(500, 200);
  app.stage.addChild(container);
}

export { attButton };
