import { Knight, Thieves, Wizard } from "./profession";
import { Dwarf, Elves, Human } from "./race";
import { playData, Profession, Race } from "./type";

class Player {
  constructor(name: string) {}
}

export let npcName = "";

export class NPC {
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
        this.npcName = "人類";
        break;
      case 1:
        this.race = new Dwarf();
        this.npcName = "矮人";
        break;
      case 2:
        this.race = new Elves();
        this.npcName = "妖精";
        break;
    }
  }
  create(): Profession {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        this.profession = new Knight(this.data, this.race);
        this.npcName += "騎士";
        break;
      case 1:
        this.profession = new Thieves(this.data, this.race);
        this.npcName += "盜賊";
        break;
      case 2:
        this.profession = new Wizard(this.data, this.race);
        this.npcName += "法師";
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
