import { Player } from "./hero";
import { Info } from "../info";
import { Buff, menu, Skill, State } from "../type";
import { probability } from "../utils/decorator";
import { BaseDecorator } from "./BaseDecorator";

/**人族實作類 */
class Human extends BaseDecorator {
  async action(myInfo: Info, otherInfo: Info) {
    this.raceSkill(myInfo, otherInfo);

    this.player.action(myInfo, otherInfo);
  }

  get HPpercent(): number {
    return this.roleInfo.HP / this.roleInfo.MaxHP;
  }

  /**奮力一搏:血量低於 20 %時，所有傷害提升 50%  */
  private raceSkill(myInfo: Info, otherInfo: Info): void {
    if (this.HPpercent > 0.2) {
      return;
    }
    myInfo.buff = Buff.奮力一搏;
    myInfo.text.raceSkill = `${this.player.name[0]} : ${Skill.奮力一搏}發動`;
  }

  constructor(player: Player) {
    player.name.push(menu.人類);
    super(player);
  }
}

/**矮人實作類 */
class Dwarf extends BaseDecorator {
  async action(myInfo: Info, otherInfo: Info) {
    this.raceSkill(myInfo, otherInfo);
    this.player.action(myInfo, otherInfo);
  }

  get HPpercent(): number {
    return this.roleInfo.HP / this.roleInfo.MaxHP;
  }

  /**生命力:血量低於 50% 時，回復 5% 生命  */
  private raceSkill(myInfo: Info, otherInfo: Info): void {
    if (this.HPpercent > 0.5) {
      return;
    }
    const heal = this.roleInfo.MaxHP * 0.05;
    myInfo.heal.push(heal);
    myInfo.text.raceSkill = `${this.player.name[0]} : ${Skill.生命力}發動，回復了 ${heal} 點生命值`;
    console.log(
      `${this.player.name[0]} : ${Skill.生命力}發動，回復了 ${heal} 點生命值`
    );
  }

  constructor(player: Player) {
    player.name.push(menu.矮人);
    super(player);
  }
}

/**妖精實作類 */
class Elves extends BaseDecorator {
  async action(myInfo: Info, otherInfo: Info) {
    this.raceSkill(myInfo, otherInfo);
    this.player.action(myInfo, otherInfo);
  }

  /**魅惑:攻擊時有 10 % 機率造成混亂，讓敵人下回合以普攻攻擊自己  */
  @probability(0.1)
  private raceSkill(myInfo: Info, otherInfo: Info): void {
    myInfo.debuff.push(State.混亂);
    myInfo.text.raceSkill = `${this.player.name[0]} : ${Skill.魅惑}發動`;
  }

  constructor(player: Player) {
    player.name.push(menu.妖精);
    super(player);
  }
}

export { Human, Dwarf, Elves };
