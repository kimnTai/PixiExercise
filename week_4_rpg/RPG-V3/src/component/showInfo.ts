import { Player } from "../character/hero";
import { Info } from "../info";
import { showAttack } from "./show_event";

class ShowInfo {
  static async init(
    attacker: Player,
    defenser: Player,
    attInfo: Info,
    defInfo: Info
  ) {
    await showAttack(attacker.name[0]);
  }
}

export {};
