import { Application, Container, Sprite, Text, Texture } from "pixi.js";
import { BaseTexture, Rectangle } from "pixi.js-legacy";
import { Game } from "../game";
import { menu } from "../type";

/**雙方角色圖像設置 */
class SetPlayerSprite {
  private playerContainer = new Container();
  private computerContainer = new Container();
  private playerHero = new Text("");
  private playerHP = new Text("");
  private computerHP = new Text("");

  constructor(private app: Application) {
    this.setPlayer();
    this.setComputer();
    this.setToApp();
  }
  /**設置玩家角色 */
  private setPlayer(): void {
    const profession: string = Game.player.name[2];
    const playerSprite = Sprite.from(this.switchPath(profession));
    this.playerHP.text = `${Game.player.name[0]} : ${Game.player.roleInfo.HP}`;
    this.playerContainer.name = "玩家";
    // 設置 玩家位置
    playerSprite.anchor.set(0.5, 1);
    playerSprite.scale.set(-124 / 96, 124 / 96);
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
    computerSprite.scale.set(124 / 96, 124 / 96);
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
  private switchPath(path: string): Texture {
    const baseTexture = BaseTexture.from("character.png");
    const size = 96;
    let rectangle!: Rectangle;
    switch (path) {
      case menu.騎士:
        rectangle = new Rectangle(size * 1, size * 1, size, size);
        break;
      case menu.盜賊:
        rectangle = new Rectangle(size * 7, size * 1, size, size);
        break;
      case menu.法師:
        rectangle = new Rectangle(size * 1, size * 5, size, size);
        break;
    }
    return new Texture(baseTexture, rectangle);
  }
  /**將玩家、NPC 設置到舞台*/
  private setToApp(): void {
    this.app.stage.addChild(this.playerContainer, this.computerContainer);
  }
}

export { SetPlayerSprite };
