import { Hero } from "./hero";

class RPGCore {
  /**傷害計算核心公式 */
  public static normalAct(act: Hero, beAct: Hero): number {
    return act.strength;
  }
}
