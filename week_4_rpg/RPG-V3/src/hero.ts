import { Info } from "./info";
import { RoleInfo, State } from "./type";

/**玩家資訊*/
interface Player {
  /**玩家暱稱 */
  name: string[];

  /**角色資訊 */
  roleInfo: RoleInfo;

  /**可不可以行動 */
  get isAction(): boolean;

  /**
   * 玩家動作
   * @param Info - 自身資訊
   * @param Info - 對方資訊
   */
  action(myInfo: Info, otherInfo: Info): any;
}

/**英雄實作類*/
class Hero implements Player {
  name: string[] = [];
  roleInfo!: RoleInfo;

  action(myInfo: Info, otherInfo: Info): void {}

  /**可不可以行動 */
  get isAction(): boolean {
    switch (this.roleInfo.state) {
      case State.暈眩:
        return false;
      case State.混亂:
        this.roleInfo.Hp -= this.roleInfo.strength;
        return false;
    }
    return true;
  }

  constructor(name: string) {
    this.name.push(name);
    this.roleInfo = {
      Hp: 300,
      MaxHp: 300,
      strength: 10,
      state: State.健康,
    };
  }
}

export { Player, Hero };
