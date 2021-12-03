import { Info } from "../info";
import { RoleInfo, State } from "../type";

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
  action(myInfo: Info, otherInfo: Info): void;
}

/**英雄實作類*/
class Hero implements Player {
  name: string[] = [];
  roleInfo!: RoleInfo;

  action(myInfo: Info, otherInfo: Info): void {}

  /**可不可以行動 */
  get isAction(): boolean {
    this.roleInfo.state.find((item, index, array) => {
      switch (item) {
        // 不知道該怎麼加文字到 myInfo 內，改成用 sessionStorage ？
        case State.暈眩:
          array.splice(index, 1);
          return false;
          break;
        case State.混亂:
          array.splice(index, 1);
          this.roleInfo.HP -= this.roleInfo.strength;
          break;
      }
    });
    return true;
  }

  constructor(name: string) {
    this.name.push(name);
    this.roleInfo = {
      HP: 300,
      MaxHP: 300,
      strength: 10,
      state: [State.健康],
    };
  }
}

export { Player, Hero };
