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
  MaxHP: number;
  /**當前血量 */
  HP: number;
  action(): any;
}

/**英雄實作類*/
class Hero implements Player {
  strength: number = 10;
  MaxHP: number = 300;
  HP: number = 300;
  state: State[] = [];
  name: string[];
  constructor(name: string) {
    this.name = [];
  }
  action() {
    console.log("開始動作");
  }
}

export { Player, Hero };
