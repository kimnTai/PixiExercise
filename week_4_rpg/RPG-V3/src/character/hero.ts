import { Info } from "../info";
import { RoleInfo, State } from "../type";

/**玩家資訊*/
interface Player {
  /**玩家暱稱 */
  name: string[];

  /**角色資訊 */
  roleInfo: RoleInfo;

  /**可不可以行動 */
  isAction(myInfo: Info): Promise<boolean>;

  /**
   * @description 玩家動作
   * @param Info - 自身資訊
   * @param Info - 對方資訊
   */
  action(myInfo: Info, otherInfo: Info): Promise<void>;
}

/**英雄實作類*/
class Hero implements Player {
  name: string[] = [];
  roleInfo!: RoleInfo;

  async action(myInfo: Info, otherInfo: Info): Promise<void> {}

  /**可不可以行動 */
  isAction(myInfo: Info): Promise<boolean> {
    myInfo.state = [...this.roleInfo.state];
    return new Promise((resolve) => {
      const state = this.roleInfo.state;
      state.find((item, index, array) => {
        if (item === State.暈眩) {
          array.splice(index, 1);
          resolve(false);
          return item;
        } else if (item === State.混亂) {
          array.splice(index, 1);
          this.roleInfo.HP -= this.roleInfo.strength;
          return item;
        }
      });
      resolve(true);
    });
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
