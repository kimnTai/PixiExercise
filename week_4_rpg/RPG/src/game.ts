import { NPC } from "./player";
import { Thieves } from "./profession";
import { Dwarf } from "./race";
import { playData, Profession, Status } from "./type";

export class Game {
  turn: number = 1;
  battle() {
    let playerA = this.playerA;
    let playerB = this.playerB;
    console.log("-------------------");
    if (this.turn % 2 === 1) {
      console.log(`${playerA.name}的回合`);
      this.fight(playerA, playerB);
    } else {
      console.log(`${playerB.name}的回合`);
      this.fight(playerB, playerA);
    }
    this.turn++;
    this.hpLog(playerA, playerB);
    this.whoWin(playerA, playerB);
  }
  fight(attacker: Profession, injured: Profession) {
    attacker.baseSkill();
    switch (attacker.status) {
      case Status.DIZZY:
        console.log(`${attacker.name} : 暈眩，停止行動`);
        attacker.status = Status.HEALTHY;
        return;
      case Status.CONFUSION:
        console.log(`${attacker.name} : 陷入混亂，攻擊自己`);
        attacker.attack(attacker);
        attacker.status = Status.HEALTHY;
        return;
    }
    attacker.raceSkill(injured);
    switch (injured.status) {
      case Status.DODGE:
        console.log(`${injured.name} : 閃避發動`);
        injured.status = Status.HEALTHY;
        return;
      case Status.COUNTERATTACK:
        injured.status = Status.HEALTHY;
        console.log(`${injured.name} : 反擊發動`);
        injured.attack(attacker);
        return;
    }
    attacker.proSkill(injured);
    attacker.attack(injured);
    return;
  }
  hpLog(playerA: Profession, playerB: Profession) {
    console.log(
      `剩餘 HP : ${playerA.name} : ${playerA.HP}，${playerB.name} : ${playerB.HP}`
    );
  }
  whoWin(playerA: Profession, playerB: Profession) {
    if (playerA.HP <= 0) {
      alert(`${playerB.name} 勝利`);
    } else if (playerB.HP <= 0) {
      alert(`${playerA.name} 勝利`);
    }
  }
  constructor(public playerA: Profession, public playerB: Profession) {}
}

export let game: Game;

export function gameStart() {
  const dataA: playData = {
    name: "玩家A",
    strength: 10,
    MaxHp: 300,
  };
  //console.clear();
  let player1 = new Thieves(dataA, new Dwarf());
  let player2 = new NPC().create();
  game = new Game(player1, player2);
}
export function handleClick() {
  game.battle();
}
