import { Player } from "../hero";
import { Info } from "../info";
import { RoleInfo } from "../type";

/**職業 - 裝飾者類(抽象裝飾者角色) */
abstract class Profession implements Player {
  name!: string[];
  roleInfo: RoleInfo;

  action(myInfo: Info, otherInfo: Info) {
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

export { Profession };
