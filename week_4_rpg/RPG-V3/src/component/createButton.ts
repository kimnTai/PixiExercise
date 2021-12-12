import { Application, Container, Sprite, Text, Texture } from "pixi.js-legacy";
import { Game } from "../game";
import { ShowEvent } from "../show/showEvent";
import { CreateText } from "./createText";

class CreateButton {
  private container = new Container();
  private attackButton = Sprite.from("attack.png");
  private restartButton = Sprite.from("restart.png");
  private speedButton = Sprite.from("speed.png");

  constructor(private app: Application) {
    this.setRestartButton();
    this.setAttackButton();
    this.setSpeedButton();
  }

  /**設置加速按鈕 */
  private setSpeedButton(): void {
    this.speedButton.name = "加速按鈕";
    this.speedButton.position.set(600, 10);
    this.speedButton.scale.set(0.8);
    this.speedButton.interactive = true;
    this.speedButton.addListener("click", () => {
      ShowEvent.doubleSpeed();
    });
    this.app.stage.addChild(this.speedButton);
  }

  /**設置重新開始按鈕 */
  private setRestartButton(): void {
    this.restartButton.name = "重新開始按鈕";
    this.restartButton.position.set(700, 10);
    this.restartButton.scale.set(0.8);
    this.restartButton.interactive = true;
    this.restartButton.addListener("click", () => {
      sessionStorage.setItem(
        "戰鬥紀錄",
        JSON.stringify([" 戰鬥紀錄\n-------"])
      );
      this.app.stage.removeChildren(1);
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
