import { Dwarf, Elves, Human } from "./race";
import { Knight, Thieves, Wizard } from "./profession";
import { playData, Profession, Status } from "./type";

const dataA: playData = {
  name: "玩家A",
  strength: 10,
  MaxHp: 300,
  status: Status.HEALTHY,
};
const dataB: playData = {
  name: "玩家B",
  strength: 10,
  MaxHp: 300,
  status: Status.HEALTHY,
};
let player1 = new Thieves(dataA, new Dwarf());
let player2 = new Wizard(dataB, new Elves());
let turn = 1;

function start() {
  player1 = new Knight(dataA, new Human());
  player2 = new Knight(dataB, new Human());
  turn = 1;
  console.clear();
}

function battle() {
  console.log("-------------------");
  if (turn % 2 === 1) {
    console.log(`${player1.name}的回合`);
    fight(player1, player2);
  } else {
    console.log(`${player2.name}的回合`);
    fight(player2, player1);
  }
  turn++;
  hpLog(player1, player2);
  whoWin(player1, player2);
}

function fight(attacker: Profession, injured: Profession) {
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

function hpLog(playerA: Profession, playerB: Profession) {
  console.log(`玩家A : ${playerA.HP}，玩家B : ${playerB.HP}`);
}
function whoWin(playerA: Profession, playerB: Profession) {
  if (playerA.HP <= 0) {
    alert("玩家2 勝利");
  } else if (playerB.HP <= 0) {
    alert("玩家1 勝利");
  }
}

document.querySelector("#attack")?.addEventListener("click", battle);
document.querySelector("#start")?.addEventListener("click", start);
