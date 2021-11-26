import { Hero } from "./character/hero";
import { Knight, Profession } from "./character/profession";
import { Human } from "./character/race";
import { DamageInfo, DefenseInfo, ShowResult } from "./system";

const init = (): void => {};
const playerA = new Knight(new Human(new Hero("玩家A")));
const playerB = new Knight(new Human(new Hero("玩家B")));

document.querySelector("button")?.addEventListener("click", att);
let turn: number = 1;
function att() {
  console.log("-------------------");
  if (turn % 2 === 1) {
    console.log(`${playerA.race.hero.name[0]}的回合`);
    atttttt(playerA, playerB);
  } else {
    console.log(`${playerB.race.hero.name[0]}的回合`);
    atttttt(playerB, playerA);
  }
  console.log(playerA.race.hero.Hp);
  console.log(playerB.race.hero.Hp);

  turn++;
}

function atttttt(A: Profession, B: Profession) {
  const damInfo = new DamageInfo(A);
  const defInfo = new DefenseInfo(B);
  const result = new ShowResult(damInfo, defInfo);
}
