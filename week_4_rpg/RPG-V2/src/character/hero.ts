import { State } from "./type";

/**玩家資訊*/
interface Player {
  /**玩家暱稱 */
  name: string[];
  /**狀態 */
  state: State[];
  /**攻擊力 */
  strength: number;
  /**最大血量 */
  MaxHp: number;
  /**當前血量 */
  Hp: number;
}

/**英雄實作類*/
class Hero implements Player {
  state: State[] = [State.HEALTHY];
  name: string[] = [];
  strength: number;
  MaxHp: number;
  Hp: number;
  constructor(name: string) {
    this.name.push(name);
    this.MaxHp = this.Hp = 300;
    this.strength = 10;
  }
}

export { Player, Hero };
