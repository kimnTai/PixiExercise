import { Player } from "./hero";
import { BattleInfo, Info } from "./info";

class Game {
  static player: Player;
  static computer: Player;
  static turn: number = 1;

  /**遊戲初始化 */
  static gameInit(player: Player, computer: Player) {
    Game.player = player;
    Game.computer = computer;
  }

  /**回合交互行動 */
  static battle() {
    const attInfo = new BattleInfo();
    const defInfo = new BattleInfo();
    console.log("-------------------");
    switch (this.turn % 2) {
      case 1:
        console.log(`${this.player.name[0]}的回合`);
        this.player.action(attInfo, defInfo);
        this.computer.action(defInfo, attInfo);
        break;
      case 0:
        console.log(`${this.computer.name[0]}的回合`);
        this.computer.action(attInfo, defInfo);
        this.player.action(defInfo, attInfo);
        break;
    }
    this.turn++;
  }

  /**計算結果 */
  private calculate(attInfo: Info, defInfo: Info) {
    let totalDamage = 0;
    attInfo.damage.forEach((item) => {
      totalDamage += item;
    });
    // 攻擊者 HP - 防守者 defDamage

    // 防守者 HP - 攻擊者 attDamage
  }
}

export { Game };
