import { Info } from "../system";
import { Race } from "./race";
import { menu, Skill, State } from "./type";

/**職業抽象類 */
abstract class Profession {
  abstract attack(info: Info): void;
  abstract baseSkill(info: Info): void;
  abstract proSkill(info: Info): void;
  constructor(public race: Race) {}
}

/**騎士實作類 */
class Knight extends Profession {
  /**普通攻擊 */
  attack(info: Info): void {
    info.damage.push(this.race.hero.strength);
  }
  /**反擊:10% 機率格擋普攻傷害，並普攻反擊一次 */
  baseSkill(info: Info): void {
    if (Math.random() >= 0.1) {
      return;
    }
    info.state.push(State.COUNTERATTACK);
    info.damage.push(this.race.hero.strength);
  }
  /**重擊:20% 觸發，造成 1.5 倍傷害 */
  proSkill(info: Info): void {
    if (Math.random() >= 0.2) {
      return;
    }
    info.damage.push(this.race.hero.strength * 1.5);
  }
  constructor(race: Race) {
    super(race);
    race.hero.name.push(menu.Knight);
  }
}

/**盜賊實作類 */
class Thieves extends Profession {
  /**普通攻擊 */
  attack(info: Info): void {
    info.damage.push(this.race.hero.strength * 0.8);
  }
  /**閃避:15% 機率閃避各種傷害 */
  baseSkill(info: Info): void {
    if (Math.random() >= 0.15) {
      return;
    }
    info.state.push(State.DODGE);
  }
  /**連擊:普攻命中時，40% 機率再攻擊一次 */
  proSkill(info: Info): void {
    if (Math.random() >= 0.4) {
      return;
    }
    this.attack(info);
  }
  constructor(race: Race) {
    super(race);
    race.hero.name.push(menu.Thieves);
  }
}

/**法師實作類 */
class Wizard extends Profession {
  /**普通攻擊:遠距離原始命中率 80%，攻擊基數 * 1.2 */
  attack(info: Info): void {
    if (Math.random() >= 0.8) {
      return;
    }
    info.damage.push(this.race.hero.strength * 1.2);
  }
  /**吸收:10% 觸發，將傷害轉為補血 */
  baseSkill(info: Info): void {
    if (Math.random() >= 0.1) {
      return;
    }
    info.deBuff?.push(Skill.ABSORB);
  }
  /**火球:10 % 觸發，造成 2 倍傷害並暈眩一回合 */
  proSkill(info: Info): void {
    if (Math.random() >= 0.2) {
      return;
    }
    info.damage.push(this.race.hero.strength * 2);
    info.deBuff?.push(State.DIZZY);
  }
  constructor(race: Race) {
    super(race);
    race.hero.name.push(menu.Wizard);
  }
}

export { Profession, Knight, Thieves, Wizard };
