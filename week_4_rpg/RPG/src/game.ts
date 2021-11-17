import { app, autoAtt, createPace } from "./pixi-component";
import { NPC, npcName, playerString } from "./player";
import { Profession, Status, style } from "./type";

let logs: string[] = [" 戰鬥紀錄"];
let game: Game;

class Game {
  turn: number = 1;
  battle(): void {
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
  private fight(attacker: Profession, injured: Profession): void {
    attacker.baseSkill();
    switch (attacker.status) {
      case Status.DIZZY:
        logs.push(`${attacker.name} : 暈眩，停止行動`);
        attacker.status = Status.HEALTHY;
        return;
      case Status.CONFUSION:
        logs.push(`${attacker.name} : 陷入混亂，攻擊自己`);
        attacker.attack(attacker);
        attacker.status = Status.HEALTHY;
        return;
    }
    attacker.raceSkill(injured);
    switch (injured.status) {
      case Status.DODGE:
        logs.push(`${injured.name} : 閃避成功`);
        injured.status = Status.HEALTHY;
        return;
      case Status.COUNTERATTACK:
        injured.status = Status.HEALTHY;
        logs.push(`${injured.name} : 格擋成功，發動反擊`);
        injured.attack(attacker);
        return;
    }
    attacker.proSkill(injured);
    attacker.attack(injured);
    return;
  }
  private hpLog(playerA: Profession, playerB: Profession): void {
    console.log(
      `剩餘 HP : ${playerA.name} : ${playerA.HP}，${playerB.name} : ${playerB.HP}`
    );
  }
  private whoWin(playerA: Profession, NPC: Profession) {
    if (playerA.HP <= 0) {
      window.clearInterval(autoAtt);
      console.log(`%c ${NPC.name} 勝利 `, style.FDF);
      console.log(`%c ${npcName} > ${playerString} `, style.CCC);
      console.log(this.turn);
    } else if (NPC.HP <= 0) {
      window.clearInterval(autoAtt);
      console.log(`%c ${playerA.name} 勝利 `, style.FDF);
      console.log(`%c ${playerString} > ${npcName} `, style.CCC);
      console.log(this.turn);
    }
  }
  constructor(public playerA: Profession, public playerB: Profession) {}
}

function gameStart(player: Profession): void {
  let player2 = new NPC().create();
  game = new Game(player, player2);
}
function handleClick(): void {
  game.battle();
}

// auto 關閉按鈕
document.querySelector("button")?.addEventListener("click", again);
function again() {
  logs = [" 戰鬥紀錄\n-------"];
  app.stage.removeChildren(4, 6);
  app.loader.load(createPace);
}

export { logs, game, Game, gameStart, handleClick };
