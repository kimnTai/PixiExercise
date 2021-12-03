import { Player } from "./hero";
import { Info } from "../info";
import { RoleInfo } from "../type";

/**裝飾者類(抽象裝飾者角色) */
abstract class BaseDecorator implements Player {
  name!: string[];
  roleInfo: RoleInfo;

  action(myInfo: Info, otherInfo: Info): void {
    this.player.action(myInfo, otherInfo);
  }

  get isAction(): boolean {
    return this.player.isAction;
  }

  constructor(protected player: Player) {
    this.name = player.name;
    this.roleInfo = player.roleInfo;
  }
}

export { BaseDecorator };
