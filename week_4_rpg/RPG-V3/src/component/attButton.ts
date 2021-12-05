import { Container, Sprite, Text, Texture } from "pixi.js-legacy";
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
    Game.battle();
    changeButtonImage();
  });
  container.position.set(500, 200);
  app.stage.addChild(container);
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

export { attButton, changeButtonImage };
