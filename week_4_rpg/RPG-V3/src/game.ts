import { Hero, Player } from "./character/hero";
import { Computer, PlayerCreate } from "./character/create";
import { BattleInfo, Info } from "./info";
import { style } from "./type";
import { SetPlayerSprite } from "./component/setPlayer";
import { ShowInfo } from "./show/showInfo";
import { ShowEvent } from "./show/showEvent";
import { app } from "./component/app";

/**遊戲主體 */
class Game {
  /**回合數 */
  static turn: number = 1;
  static player: Player;
  static computer: Player;

  /** 遊戲開始 */
  static Start(player: Player): void {
    // 移除選擇職業按紐
    app.stage.removeChildAt(4);
    Game.player = player;
    Game.computer = Computer.create();
    new SetPlayerSprite(app);
  }

  /**重新開始  */
  static restart() {
    PlayerCreate._player = new Hero("玩家");
    this.turn = 1;
  }

  /**回合交互行動 */
  static async battle(): Promise<void> {
    console.log("-------------------");
    if (this.whoWin(this.player, this.computer)) {
      // 如果有結果 -> return
      return;
    }
    const attInfo = new BattleInfo();
    const defInfo = new BattleInfo();
    switch (this.turn % 2) {
      // 玩家的回合
      case 1:
        console.log(`${this.player.name[0]}的回合`);
        await this.player.action(attInfo, defInfo);
        await this.computer.action(defInfo, attInfo);
        await ShowInfo.init(this.player, this.computer, attInfo, defInfo);
        await this.calculate(this.player, this.computer, attInfo, defInfo);
        break;
      // 電腦的回合
      case 0:
        console.log(`${this.computer.name[0]}的回合`);
        await this.computer.action(attInfo, defInfo);
        await this.player.action(defInfo, attInfo);
        await ShowInfo.init(this.computer, this.player, attInfo, defInfo);
        await this.calculate(this.computer, this.player, attInfo, defInfo);
        break;
    }
    this.turn++;
    this.battle();
  }

  /**計算結果，扣除血量，並更新到畫面 */
  private static async calculate(
    attacker: Player,
    defenser: Player,
    attInfo: Info,
    defInfo: Info
  ): Promise<void> {
    const beforeAttackerHP = attacker.roleInfo.HP;
    const beforeDefenserHP = defenser.roleInfo.HP;
    let attDamage = 0;
    let defDamage = 0;
    let totalHeal = 0;
    attInfo.damage.forEach((item) => {
      attDamage += item * attInfo.buff;
    });
    attInfo.heal.forEach((item) => {
      totalHeal += item * attInfo.buff;
    });
    defInfo.defDamage.forEach((item) => {
      defDamage += item * defInfo.buff;
    });

    // 攻擊者 HP + 攻擊者 heal - 防守者 defDamage
    attacker.roleInfo.HP += totalHeal - defDamage;
    // 防守者 HP - 攻擊者 attDamage
    defenser.roleInfo.HP -= attDamage;
    // 攻擊者 debuff 附加到 防守者 state
    attInfo.debuff.forEach((item) => {
      defenser.roleInfo.state.push(item);
    });
    ShowEvent.updateHP(
      attacker.name[0],
      beforeAttackerHP,
      attacker.roleInfo.HP
    );
    await ShowEvent.updateHP(
      defenser.name[0],
      beforeDefenserHP,
      defenser.roleInfo.HP
    );
  }

  /**當其中一方血量歸零，顯示結果 */
  private static whoWin(player: Player, computer: Player): boolean {
    if (player.roleInfo.HP <= 0) {
      console.log(`%c ${computer.name[0]} 勝利 `, style.FDF);
      console.log(`%c ${computer.name} > ${player.name} `, style.CCC);
      console.log(this.turn);
      ShowInfo.death(player.name[0]);
      return true;
    } else if (computer.roleInfo.HP <= 0) {
      console.log(`%c ${player.name[0]} 勝利 `, style.FDF);
      console.log(`%c ${player.name} > ${computer.name} `, style.CCC);
      console.log(this.turn);
      ShowInfo.death(computer.name[0]);
      return true;
    }
    return false;
  }
}

export { Game };
