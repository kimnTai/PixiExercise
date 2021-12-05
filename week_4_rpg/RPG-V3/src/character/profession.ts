import { probability } from "../utils/decorator";
import { Player } from "./hero";
import { BaseDecorator } from "./BaseDecorator";
import { Info } from "../info";
import { menu, Skill, State } from "../type";

/**騎士 - 具體裝飾者角色 */
class Knight extends BaseDecorator {
  async action(myInfo: Info, otherInfo: Info): Promise<void> {
    const res = await this.isAction(myInfo);
    if (res) {
      myInfo.damage.push(this.attack());
      this.proSkill(myInfo, otherInfo);
      this.baseSkill(myInfo, otherInfo);
      this.player.action(myInfo, otherInfo);
    }
  }

  /**普通攻擊 */
  private attack(): number {
    return this.roleInfo.strength;
  }

  /**反擊:10% 機率格擋普攻傷害，並普攻反擊一次 */
  @probability(0.1)
  private baseSkill(myInfo: Info, otherInfo: Info): void {
    otherInfo.damage.shift();
    myInfo.defDamage.push(this.attack());
    myInfo.skill.push(Skill.反擊);
  }

  /**重擊:20% 觸發，造成 1.5 倍傷害 */
  @probability(0.2)
  private proSkill(myInfo: Info, otherInfo: Info): void {
    myInfo.damage.push(this.roleInfo.strength * 1.5);
    myInfo.text.proSkill = `${this.player.name[0]} 重擊發動，造成了 ${
      this.roleInfo.strength * 1.5
    } 點傷害`;
  }

  constructor(player: Player) {
    player.name.push(menu.騎士);
    super(player);
  }
}

/**盜賊 - 具體裝飾者角色 */
class Thieves extends BaseDecorator {
  async action(myInfo: Info, otherInfo: Info): Promise<void> {
    const res = await this.isAction(myInfo);
    if (res) {
      myInfo.damage.push(this.attack());
      this.proSkill(myInfo, otherInfo);
      this.baseSkill(myInfo, otherInfo);
      this.player.action(myInfo, otherInfo);
    }
  }

  /**普通攻擊，攻擊基數 * 0.8 */
  private attack(): number {
    return this.roleInfo.strength * 0.8;
  }

  /**閃避:15% 機率閃避各種傷害 */
  @probability(0.15)
  private baseSkill(myInfo: Info, otherInfo: Info): void {
    otherInfo.damage = [];
  }

  /**連擊:普攻命中時，40% 機率再攻擊一次 */
  @probability(0.4)
  private proSkill(myInfo: Info, otherInfo: Info): void {
    myInfo.damage.push(this.attack());
    myInfo.text.proSkill = `${this.player.name[0]} : 連擊發動`;
  }

  constructor(player: Player) {
    player.name.push(menu.盜賊);
    super(player);
  }
}

/**法師 - 具體裝飾者角色 */
class Wizard extends BaseDecorator {
  async action(myInfo: Info, otherInfo: Info): Promise<void> {
    const res = await this.isAction(myInfo);
    if (res) {
      myInfo.damage.push(this.attack());
      this.proSkill(myInfo, otherInfo);
      this.baseSkill(myInfo, otherInfo);
      this.player.action(myInfo, otherInfo);
    }
  }

  /**普通攻擊: 遠距離原始命中率 80%，攻擊基數 * 1.2 */
  private attack(): number {
    if (Math.random() >= 0.8) {
      return 0;
    } else {
      return this.roleInfo.strength * 1.2;
    }
  }

  /**吸收: 10% 觸發，將傷害轉為補血 */
  @probability(0.1)
  private baseSkill(myInfo: Info, otherInfo: Info): void {
    myInfo.damage.forEach((item) => {
      myInfo.heal.push(item);
    });
  }

  /**火球: 10% 觸發，造成兩倍傷害並暈眩一回合 */
  @probability(0.1)
  private proSkill(myInfo: Info, otherInfo: Info): void {
    myInfo.damage.push(this.roleInfo.strength * 2);
    myInfo.debuff.push(State.暈眩);
    myInfo.skill.push(Skill.火球);
  }

  constructor(player: Player) {
    player.name.push(menu.法師);
    super(player);
  }
}

export { Knight, Thieves, Wizard };
