import { playData, Race, RaceSkill, Status } from "./type";

// 人族實作類
export class Human implements Race {
  name!: string;
  HP!: number;
  strength!: number;
  MaxHp!: number;
  raceSkill(data: playData): RaceSkill {
    if (this.HP / this.MaxHp <= 0.2) {
      console.log(`${this.name} : ${RaceSkill.HUMANSKILL}發動`);
      this.strength = this.strength * 1.5;
      return RaceSkill.HUMANSKILL;
    }
    return RaceSkill.FALSE;
  }
}
// 矮人實作類
export class Dwarf implements Race {
  name!: string;
  HP!: number;
  MaxHp!: number;
  raceSkill(data: playData): RaceSkill {
    if (this.HP / this.MaxHp <= 0.5) {
      const health = this.MaxHp * 0.05;
      this.HP += health;
      console.log(
        `${this.name} : ${RaceSkill.DWARFSKILL}發動，回復了 ${health} 點生命值`
      );
      return RaceSkill.DWARFSKILL;
    }
    return RaceSkill.FALSE;
  }
}
// 妖精實作類
export class Elves implements Race {
  name!: string;
  raceSkill(data: playData): RaceSkill {
    if (Math.random() <= 0.1) {
      console.log(`${this.name} : ${RaceSkill.ELVESSKILL}發動`);
      data.status = Status.CONFUSION;
      return RaceSkill.ELVESSKILL;
    }
    return RaceSkill.FALSE;
  }
}
