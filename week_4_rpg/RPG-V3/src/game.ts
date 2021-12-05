import { Player } from "./character/hero";
import { NPC } from "./character/create";
import { BattleInfo, Info } from "./info";
import { style } from "./type";
import { showAttack, showDeath } from "./component/show_event";

/**遊戲主體 */
class Game {
  static player: Player;
  static NPC: Player;
  static turn: number = 1;

  /** 遊戲開始 */
  static Start(player: Player): void {
    const computer = NPC.create();
    Game.player = player;
    Game.NPC = computer;
  }

  /**回合交互行動 */
  static async battle(): Promise<void> {
    const attInfo = new BattleInfo();
    const defInfo = new BattleInfo();
    console.log("-------------------");
    switch (this.turn % 2) {
      case 1:
        console.log(`${this.player.name[0]}的回合`);
        this.player.action(attInfo, defInfo);
        this.NPC.action(defInfo, attInfo);
        await showAttack("玩家");
        this.calculate(this.player, this.NPC, attInfo, defInfo);
        break;
      case 0:
        console.log(`${this.NPC.name[0]}的回合`);
        this.NPC.action(attInfo, defInfo);
        this.player.action(defInfo, attInfo);
        await showAttack("電腦");
        this.calculate(this.NPC, this.player, attInfo, defInfo);
        break;
    }
    console.log(this.player.roleInfo);
    console.log(this.NPC.roleInfo);

    const isWin = await this.whoWin(this.player, this.NPC);
    if (!isWin) {
      this.battle(); // 如果還沒贏 -> 繼續戰鬥
    }
    this.turn++;
  }

  /**計算結果 */
  static async calculate(
    attacker: Player,
    defenser: Player,
    attInfo: Info,
    defInfo: Info
  ): Promise<void> {
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
  }

  /**當其中一方血量歸零，顯示結果 */
  static async whoWin(player: Player, NPC: Player): Promise<boolean> {
    if (player.roleInfo.HP <= 0) {
      await showDeath("玩家");
      console.log(`%c ${NPC.name[0]} 勝利 `, style.FDF);
      console.log(`%c ${NPC.name} > ${player.name} `, style.CCC);
      console.log(this.turn);
      return true;
    } else if (NPC.roleInfo.HP <= 0) {
      await showDeath("電腦");
      console.log(`%c ${player.name[0]} 勝利 `, style.FDF);
      console.log(`%c ${player.name} > ${NPC.name} `, style.CCC);
      console.log(this.turn);
      return true;
    }
    return false;
  }
}

export { Game };
