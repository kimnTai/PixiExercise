import { Application, Container, Sprite, Text } from "pixi.js";
import { game, handleClick, logs } from "./game";
import { choseSwitch, npcName } from "./player";
import { menu } from "./type";

let autoAtt!: number;
let app!: Application;

function pixiInit() {
  app = new Application({
    width: 800,
    height: 400,
    antialias: true,
    resolution: 1,
  });
  document.querySelector("#app")?.appendChild(app.view);
  // 加載
  app.loader
    .add("attack.png", "../img/attack.png")
    .add("background.png", "../img/background.png")
    .add("Knight.png", "../img/Knight.png")
    .add("Thieves.png", "../img/Thieves.png")
    .add("Wizard.png", "../img/Wizard.png")
    .load(setBackground)
    .load(setAttSprite)
    .load(logText)
    .load(createPace);
}

// 背景設置
function setBackground() {
  const background = Sprite.from("background.png");
  const background_2 = Sprite.from("background.png");
  background.width = app.screen.width;
  background.height = app.screen.height;
  background_2.width = app.screen.width;
  background_2.height = app.screen.height;
  background_2.x = -app.screen.width;
  app.ticker.add((time) => {
    if (background.x >= app.screen.width) {
      background.x = -app.screen.width;
    }
    if (background_2.x >= app.screen.width) {
      background_2.x = -app.screen.width;
    }
    background.x += 1;
    background_2.x += 1;
  });
  app.stage.addChild(background, background_2);
}

// 攻擊按鈕設置
function setAttSprite() {
  const container = new Container();
  const sprite = Sprite.from("attack.png");
  const text = new Text("攻擊", {
    fontSize: 50,
    fill: ["#000"],
  });
  sprite.anchor.set(0.5);
  text.anchor.set(0.5);
  container.addChild(sprite, text);
  container.interactive = true;
  container.addListener("click", () => {
    autoAtt = window.setInterval(handleClick, 35);
    //autoAtt = window.setInterval(handleClick);
  });
  container.x = 500;
  container.y = 200;
  app.stage.addChild(container);
}

// 雙方角色圖案設置
function setPlayer(playerPath: string, playerString: string) {
  const playerContainer = new Container();
  const playerHP = new Text(`${game.playerA.name} : ${game.playerA.HP}`);
  const playerSprite = Sprite.from(switchPath(playerPath));
  const playerRace = new Text("");
  playerHP.y = -60;
  playerRace.x = 40;
  playerRace.y = -30;
  playerContainer.x = 300;
  playerContainer.y = 150;
  playerRace.text = `${playerString}`;
  playerContainer.addChild(playerSprite, playerRace, playerHP);
  const npcContainer = new Container();
  const str = npcName.slice(2, 4);
  const npcSprite = Sprite.from(switchPath(str));
  const npcRace = new Text(npcName);
  npcRace.x = 40;
  npcRace.y = -30;
  const computerHP = new Text(`${game.playerB.name} : ${game.playerB.HP}`);
  computerHP.y = -60;
  npcContainer.addChild(npcSprite, npcRace, computerHP);
  npcContainer.y = 150;
  npcContainer.x = app.screen.width - 224;
  app.stage.addChild(playerContainer, npcContainer);
  app.ticker.add(() => {
    playerHP.text = `${game.playerA.name} : ${game.playerA.HP}`;
    computerHP.text = `${game.playerB.name} : ${game.playerB.HP}`;
  });
}

function switchPath(path: string): string {
  switch (path) {
    case menu.Knight:
      path = "Knight.png";
      break;
    case menu.Thieves:
      path = "Thieves.png";
      break;
    case menu.Wizard:
      path = "Wizard.png";
      break;
  }
  return path;
}

// log 紀錄
function logText() {
  const logText = app.stage.addChild(
    new Text("", {
      fontSize: 16,
    })
  );
  logs.push("-------");
  app.ticker.add(() => {
    logText.text = logs.join("\n");
    if (logs.length > 20) {
      logs.shift();
    }
  });
}

// 角色創建
function createPace() {
  const container = new Container();
  container.name = "選擇種族";
  const logText = new Text("選擇種族", {
    fontSize: 32,
  });
  const Human = new Text(menu.Human, {
    fontSize: 50,
  });
  const Dwarf = new Text(menu.Dwarf, {
    fontSize: 50,
  });
  const Elves = new Text(menu.Elves, {
    fontSize: 50,
  });
  Human.y = 50;
  Dwarf.y = Human.y + 60;
  Elves.y = Dwarf.y + 60;
  container.addChild(logText, Human, Dwarf, Elves);
  Human.interactive = Dwarf.interactive = Elves.interactive = true;
  Human.addListener("click", () => {
    choseSwitch(Human);
  });
  Dwarf.addListener("click", () => {
    choseSwitch(Dwarf);
  });
  Elves.addListener("click", () => {
    choseSwitch(Elves);
  });
  container.y = 50;
  app.stage.addChild(container);
}

export { autoAtt, app, setPlayer, pixiInit, createPace };
