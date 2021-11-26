import { probability } from "./decorator";
import { Hero, Player } from "./hero";
import { State } from "./type";

/**職業抽象類 */
class Profession implements Player {
  name: string[] = [];
  state: State[] = [];
  strength!: number;
  MaxHP!: number;
  HP!: number;
  action() {
    this.player.action();
  }
  constructor(public player: Player) {}
}

/**騎士實作類 - 裝飾者模式 */
class Knight extends Profession {
  action() {
    this.attack();
    this.baseSkill();
    this.proSkill();
    this.player.action();
  }
  /**普通攻擊 */
  attack(): void {
    console.log("普通攻擊");
  }
  /**反擊:10% 機率格擋普攻傷害，並普攻反擊一次 */
  @probability(0.1)
  baseSkill(): void {
    console.log("反擊");
  }
  /**重擊:20% 觸發，造成 1.5 倍傷害 */
  @probability(0.2)
  proSkill(): void {
    console.log("重擊");
  }
  constructor(player: Player) {
    super(player);
  }
}

export { Profession, Knight };
