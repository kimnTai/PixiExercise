import { Hero } from "./hero";
import { Knight } from "./profession/Knight";
import { Wizard } from "./profession/Wizard";
import { Human } from "./Race";

import { Game } from "./game";

const init = (): void => {};

document.querySelector("button")?.addEventListener("click", att);
const playerA = new Human(new Wizard(new Hero("玩家")));
const playerB = new Human(new Wizard(new Hero("電腦")));
Game.gameInit(playerA, playerB);

function att() {
  Game.battle();
}
