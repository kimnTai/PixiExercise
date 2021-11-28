import { Player } from "./hero";
import { Info } from "./info";
import { Buff, menu, RoleInfo, State } from "./type";
import { probability } from "./utils/decorator";

/**種族 - 裝飾者類(抽象裝飾者角色) */
abstract class Race implements Player {
  name!: string[];
  roleInfo: RoleInfo;

  action(myInfo: Info, otherInfo: Info) {
    this.player.action(myInfo, otherInfo);
  }

  get isAction(): boolean {
    return this.player.isAction;
  }

  constructor(protected player: Player) {
    this.name = player.name;
    this.roleInfo = player.roleInfo;
  }
}

/**人族實作類 */
class Human extends Race {
  override action(myInfo: Info, otherInfo: Info) {
    this.raceSkill(myInfo, otherInfo);

    this.player.action(myInfo, otherInfo);
  }

  get HPpercent(): number {
    return this.roleInfo.Hp / this.roleInfo.MaxHp;
  }

  /**奮力一搏:血量低於 20 %時，所有傷害提升 50%  */
  private raceSkill(myInfo: Info, otherInfo: Info): void {
    if (this.HPpercent > 0.2) {
      return;
    }
    myInfo.buff = Buff.奮力一搏;
  }

  constructor(player: Player) {
    player.name.push(menu.人類);
    super(player);
  }
}

/**矮人實作類 */
class Dwarf extends Race {
  override action(myInfo: Info, otherInfo: Info) {
    this.raceSkill(myInfo, otherInfo);
    this.player.action(myInfo, otherInfo);
  }

  get HPpercent(): number {
    return this.roleInfo.Hp / this.roleInfo.MaxHp;
  }

  /**生命力:血量低於 50% 時，回復 5% 生命  */
  private raceSkill(myInfo: Info, otherInfo: Info): void {
    if (this.HPpercent > 0.5) {
      return;
    }
    myInfo.heal.push(this.roleInfo.MaxHp * 0.05);
  }

  constructor(player: Player) {
    player.name.push(menu.矮人);
    super(player);
  }
}

/**妖精實作類 */
class Elves extends Race {
  override action(myInfo: Info, otherInfo: Info) {
    this.raceSkill(myInfo, otherInfo);
    this.player.action(myInfo, otherInfo);
  }

  /**魅惑:攻擊時有 10 % 機率造成混亂，讓敵人下回合以普攻攻擊自己  */
  @probability(0.1)
  private raceSkill(myInfo: Info, otherInfo: Info): void {
    myInfo.debuff = State.混亂;
  }

  constructor(player: Player) {
    player.name.push(menu.妖精);
    super(player);
  }
}

export { Race, Human, Dwarf, Elves };
