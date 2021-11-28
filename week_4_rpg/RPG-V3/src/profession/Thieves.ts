import { probability } from "../utils/decorator";
import { Player } from "../hero";
import { Profession } from "./Profession";
import { Info } from "../info";
import { menu } from "../type";

/**盜賊 - 具體裝飾者角色 */
class Thieves extends Profession {
  override action(myInfo: Info, otherInfo: Info) {
    if (!this.isAction) {
      return;
    }
    myInfo.damage.push(this.attack());
    this.proSkill(myInfo, otherInfo);
    this.baseSkill(myInfo, otherInfo);
    this.player.action(myInfo, otherInfo);
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
  }

  constructor(player: Player) {
    player.name.push(menu.盜賊);
    super(player);
  }
}

export { Thieves };
