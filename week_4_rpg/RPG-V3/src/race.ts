import { Hero } from "./hero";

/**種族介面 */
interface Race {
  raceSkill(): void;
}

/**人族實作類 */
class Human implements Race {
  /**奮力一搏:血量低於 20 %時，所有傷害提升 50%  */
  raceSkill(): void {}
}

export { Race, Human };
