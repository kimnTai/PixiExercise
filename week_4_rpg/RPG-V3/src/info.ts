import { BattleText, State } from "./type";

/**資訊抽象類 */
abstract class Info {
  damage!: number[];
  defDamage!: number[];
  heal!: number[];
  state!: State[];
  skill!: any[];
  debuff!: State[];
  buff!: number;
  text!: BattleText;
}

/**戰鬥資訊 */
class BattleInfo implements Info {
  damage: number[] = [];
  defDamage: number[] = [];
  heal: number[] = [];
  state: State[] = [];
  skill: any[] = [];
  debuff: State[] = [];
  buff: number = 1;
  text: BattleText = {};
}

export { Info, BattleInfo };
