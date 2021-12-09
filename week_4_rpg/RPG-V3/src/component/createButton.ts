import { Application, Container, Sprite, Text, Texture } from "pixi.js-legacy";
import { Game } from "../game";
import { CreateText } from "./createText";

class CreateButton {
  private container = new Container();
  private attackButton = Sprite.from("attack.png");
  private restartButton = Sprite.from("restart.png");

  constructor(private app: Application) {
    this.setRestartButton();
    this.setAttackButton();
  }

  /**設置重新開始按鈕 */
  setRestartButton(): void {
    this.restartButton.name = "重新開始按鈕";
    this.restartButton.position.set(700, 10);
    this.restartButton.scale.set(0.8);
    this.restartButton.interactive = true;
    this.restartButton.addListener("click", () => {
      sessionStorage.setItem(
        "戰鬥紀錄",
        JSON.stringify([" 戰鬥紀錄\n-------"])
      );
      this.app.stage.removeChildren(1, 6);
      new CreateButton(this.app);
      new CreateText(this.app);
      Game.restart();
    });
    this.app.stage.addChild(this.restartButton);
  }

  /**攻擊按鈕設置 */
  private setAttackButton(): void {
    this.attackButton.anchor.set(0.5);
    const text = new Text("攻擊", {
      fontSize: 50,
      fill: ["#000"],
    });
    text.anchor.set(0.5);
    this.container.name = "攻擊按鈕";
    this.container.position.set(500, 200);
    this.container.addChild(this.attackButton, text);
    this.container.interactive = true;
    this.container.addListener("click", () => {
      Game.battle();
      this.changeAttackImage();
    });
    this.app.stage.addChild(this.container);
  }

  /**交換攻擊按紐圖片 */
  private changeAttackImage(): void {
    const attackBlack = Texture.from("attack_black.png");
    const attack = Texture.from("attack.png");
    this.attackButton.texture = attackBlack;
    this.container.interactive = false;
  }
}

export { CreateButton };
