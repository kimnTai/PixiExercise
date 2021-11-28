import { probability } from "../utils/decorator";
import { Player } from "../hero";
import { Profession } from "./Profession";
import { Info } from "../info";
import { menu } from "../type";

/**騎士 - 具體裝飾者角色 */
class Knight extends Profession {
  override action(myInfo: Info, otherInfo: Info) {
    if (!this.isAction) {
      return;
    }
    myInfo.damage.push(this.attack());
    this.proSkill(myInfo, otherInfo);
    this.baseSkill(myInfo, otherInfo);
    this.player.action(myInfo, otherInfo);
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
  }

  /**重擊:20% 觸發，造成 1.5 倍傷害 */
  @probability(0.2)
  private proSkill(myInfo: Info, otherInfo: Info): void {
    myInfo.damage.push(this.roleInfo.strength * 1.5);
  }

  constructor(player: Player) {
    player.name.push(menu.騎士);
    super(player);
  }
}

export { Knight };
