import { probability } from "../utils/decorator";
import { Player } from "../hero";
import { Profession } from "./Profession";
import { Info } from "../info";
import { menu, State } from "../type";

/**法師 - 具體裝飾者角色 */
class Wizard extends Profession {
  override action(myInfo: Info, otherInfo: Info) {
    if (!this.isAction) {
      return;
    }
    myInfo.damage.push(this.attack());
    this.proSkill(myInfo, otherInfo);
    this.baseSkill(myInfo, otherInfo);
    this.player.action(myInfo, otherInfo);
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
    myInfo.debuff = State.暈眩;
  }

  constructor(player: Player) {
    player.name.push(menu.法師);
    super(player);
  }
}

export { Wizard };
