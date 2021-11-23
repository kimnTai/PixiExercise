import { Text } from "pixi.js";
import { gameStart } from "./game";
import { app, setPlayer } from "./pixi-component";
import { Knight, Thieves, Wizard } from "./profession";
import { Dwarf, Elves, Human } from "./race";
import { menu, playData, Profession, Race } from "./type";

let npcName = "";
let playerRace: Race;
let playerString: string = "";

// NPC 種族、職業隨機產生
class NPC {
  race!: Race;
  profession!: Profession;
  npcName!: string;
  data: playData = {
    name: "電腦",
    strength: 10,
    MaxHp: 300,
  };
  private raceCreate() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        this.race = new Human();
        this.npcName = menu.Human;
        break;
      case 1:
        this.race = new Dwarf();
        this.npcName = menu.Dwarf;
        break;
      case 2:
        this.race = new Elves();
        this.npcName = menu.Elves;
        break;
    }
  }
  create(): Profession {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        this.profession = new Knight(this.data, this.race);
        this.npcName += menu.Knight;
        break;
      case 1:
        this.profession = new Thieves(this.data, this.race);
        this.npcName += menu.Thieves;
        break;
      case 2:
        this.profession = new Wizard(this.data, this.race);
        this.npcName += menu.Wizard;
        break;
    }
    console.log(`對上：${this.npcName}`);
    npcName = this.npcName;
    return this.profession;
  }
  constructor() {
    this.raceCreate();
  }
}

// 玩家角色創建
function choseSwitch(pixi: Text) {
  if (playerString.length > 4) {
    playerString = playerString.slice(4, 6);
  }
  let playProfession!: Profession;
  let isCreate = false;
  const dataA: playData = {
    name: "玩家",
    strength: 10,
    MaxHp: 300,
  };
  switch (pixi.text) {
    case menu.Human:
      playerRace = new Human();
      break;
    case menu.Dwarf:
      playerRace = new Dwarf();
      break;
    case menu.Elves:
      playerRace = new Elves();
      break;
    case menu.Knight:
      playProfession = new Knight(dataA, playerRace);
      isCreate = true;
      break;
    case menu.Thieves:
      playProfession = new Thieves(dataA, playerRace);
      isCreate = true;
      break;
    case menu.Wizard:
      playProfession = new Wizard(dataA, playerRace);
      isCreate = true;
      break;
  }
  playerString += pixi.text;
  // 選擇種族後，更改為選擇職業
  (pixi.parent.children[0] as Text).text = "選擇職業";
  (pixi.parent.children[1] as Text).text = menu.Knight;
  (pixi.parent.children[2] as Text).text = menu.Thieves;
  (pixi.parent.children[3] as Text).text = menu.Wizard;
  if (isCreate) {
    //pixi.parent.renderable = false;
    app.stage.removeChildAt(4);
    gameStart(playProfession);
    setPlayer(pixi.text, playerString);
  }
}

export { npcName, playerString, NPC, choseSwitch };
