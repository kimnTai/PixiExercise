import { Player } from "./hero";
import { Info } from "../info";
import { RoleInfo } from "../type";

/**裝飾者類(抽象裝飾者角色) */
abstract class BaseDecorator implements Player {
  name!: string[];
  roleInfo: RoleInfo;

  async action(myInfo: Info, otherInfo: Info): Promise<void> {
    this.player.action(myInfo, otherInfo);
  }

  async isAction(myInfo: Info): Promise<boolean> {
    return this.player.isAction(myInfo);
  }

  constructor(protected player: Player) {
    this.name = player.name;
    this.roleInfo = player.roleInfo;
  }
}

export { BaseDecorator };
