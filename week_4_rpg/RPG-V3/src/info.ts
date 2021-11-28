abstract class Info {
  damage: number[] = [];
  defDamage: number[] = [];
  heal: number[] = [];
  buff: unknown;
  debuff: unknown;
}

class BattleInfo implements Info {
  damage: number[] = [];
  defDamage: number[] = [];
  heal: number[] = [];
  buff: unknown;
  debuff: unknown;
}

export { Info, BattleInfo };
