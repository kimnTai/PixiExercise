import { Container, Sprite, Text } from "pixi.js";
import { Game } from "../game";
import { menu } from "../type";
import { app } from ".";

/**雙方角色圖像設置 */
function setPlayer(playerPath: string) {
  const playerContainer = new Container();

  const playerHP = new Text(
    `${Game.player.name[0]} : ${Game.player.roleInfo.HP}`
  );
  const playerSprite = Sprite.from(switchPath(playerPath));
  const playerHero = new Text("");
  playerContainer.name = "玩家";
  // 設置 玩家位置
  playerSprite.anchor.set(0.5, 1);
  playerHP.position.set(-62, -235);
  playerHero.position.set(-22, -205);
  playerContainer.position.set(362, 325);
  playerHero.text = `${Game.player.name[1]}${Game.player.name[2]}`;
  playerContainer.addChild(playerSprite, playerHero, playerHP);
  const computerContainer = new Container();
  const str = Game.NPC.name[2];
  const computerSprite = Sprite.from(switchPath(str));
  const computerHero = new Text(Game.NPC.name[1] + Game.NPC.name[2]);
  const computerHP = new Text(`${Game.NPC.name[0]} : ${Game.NPC.roleInfo.HP}`);
  computerContainer.name = "電腦";
  // 設置 電腦位置
  computerSprite.anchor.set(0.5, 1);
  computerSprite.scale.x = -1;
  computerHero.position = playerHero.position;
  computerHP.position = playerHP.position;
  computerContainer.y = playerContainer.y;
  computerContainer.x = playerContainer.x + 276;
  computerContainer.addChild(computerSprite, computerHero, computerHP);
  // 將玩家、NPC 設置到舞台
  app.stage.addChild(playerContainer, computerContainer);
  // 監聽血量變化
  app.ticker.add(() => {
    playerHP.text = `${Game.player.name[0]} : ${Game.player.roleInfo.HP}`;
    computerHP.text = `${Game.NPC.name[0]} : ${Game.NPC.roleInfo.HP}`;
  });
}

/**圖片路徑判斷 */
function switchPath(path: string): string {
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

export { setPlayer };
