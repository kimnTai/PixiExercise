import { Profession } from "./character/profession";

class Game {
  /**回合數 */
  turn: number = 1;
  /**戰鬥開始 */
  battle() {
    let playerA = this.playerA;
    let playerB = this.playerB;
    console.log("-------------------");
    if (this.turn % 2 === 1) {
      console.log(`${playerA.race.hero.name}的回合`);
    } else {
      console.log(`${playerB.race.hero.name}的回合`);
    }
    this.turn++;
  }
  fight() {}
  constructor(public playerA: Profession, public playerB: Profession) {}
}
