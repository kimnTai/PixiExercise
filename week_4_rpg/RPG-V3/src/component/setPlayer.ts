import { Container, Sprite, Text } from "pixi.js";
import { Game } from "../game";
import { menu } from "../type";
import { app } from ".";

/**雙方角色圖像設置 */
class SetPlayerSprite {
  private playerContainer = new Container();
  private computerContainer = new Container();
  private playerHero = new Text("");
  private playerHP = new Text("");
  private computerHP = new Text("");

  constructor() {
    this.setPlayer();
    this.setComputer();
    this.setApp();
  }
  /**設置玩家角色 */
  private setPlayer(): void {
    const profession: string = Game.player.name[2];
    const playerSprite = Sprite.from(this.switchPath(profession));
    this.playerHP.text = `${Game.player.name[0]} : ${Game.player.roleInfo.HP}`;
    this.playerContainer.name = "玩家";
    // 設置 玩家位置
    playerSprite.anchor.set(0.5, 1);
    this.playerHP.position.set(-62, -235);
    this.playerHero.position.set(-22, -205);
    this.playerContainer.position.set(362, 325);
    this.playerHero.text = `${Game.player.name[1]}${Game.player.name[2]}`;
    this.playerContainer.addChild(playerSprite, this.playerHero, this.playerHP);
  }
  /**設置電腦角色 */
  private setComputer(): void {
    const str = Game.computer.name[2];
    const computerSprite = Sprite.from(this.switchPath(str));
    const computerHero = new Text(
      Game.computer.name[1] + Game.computer.name[2]
    );
    this.computerHP.text = `${Game.computer.name[0]} : ${Game.computer.roleInfo.HP}`;
    this.computerContainer.name = "電腦";
    // 設置 電腦位置
    computerSprite.anchor.set(0.5, 1);
    computerSprite.scale.x = -1;
    computerHero.position = this.playerHero.position;
    this.computerHP.position = this.playerHP.position;
    this.computerContainer.y = this.playerContainer.y;
    this.computerContainer.x = this.playerContainer.x + 276;
    this.computerContainer.addChild(
      computerSprite,
      computerHero,
      this.computerHP
    );
  }
  /**圖片路徑判斷 */
  private switchPath(path: string): string {
    switch (path) {
      case menu.騎士:
        path = "Knight.png";
        break;
      case menu.盜賊:
        path = "Thieves.png";
        break;
      case menu.法師:
        path = "Wizard.png";
        break;
    }
    return path;
  }
  /**將玩家、NPC 設置到舞台，並監聽血量變化 */
  private setApp(): void {
    app.stage.addChild(this.playerContainer, this.computerContainer);
    app.ticker.add(() => {
      this.playerHP.text = `${Game.player.name[0]} : ${Game.player.roleInfo.HP}`;
      this.computerHP.text = `${Game.computer.name[0]} : ${Game.computer.roleInfo.HP}`;
    });
  }
}

export { SetPlayerSprite };
