// 種族介面
export interface Race {
  raceSkill(data: playData): RaceSkill;
}

// 玩家資料，血量、攻擊力、狀態
export interface playData {
  name: string; // 玩家暱稱
  MaxHp: number; // 最大血量
  strength: number; // 攻擊力
  status: Status; // 狀態
}

// 職業抽象類
export abstract class Profession implements Race, playData {
  name: string;
  MaxHp: number;
  strength: number;
  status: Status;
  HP: number; // 當前血量
  absorb!: boolean; // 法師吸血判定

  attack(injured: Profession): void {
    throw new Error("Method not implemented.");
  }
  baseSkill() {
    throw new Error("Method not implemented.");
  }
  proSkill(injured: Profession): void {
    throw new Error("Method not implemented.");
  }
  raceSkill(data: playData): RaceSkill {
    throw new Error("Method not implemented.");
  }
  constructor(data: playData, race: Race) {
    this.raceSkill = race.raceSkill;
    this.HP = this.MaxHp = data.MaxHp;
    this.strength = data.strength;
    this.status = data.status;
    this.name = data.name;
  }
}

// 狀態
export enum Status {
  HEALTHY = "健康",
  DIZZY = "暈眩",
  CONFUSION = "混亂",
  DODGE = "閃避",
  COUNTERATTACK = "反擊",
}

// 種族技能
export enum RaceSkill {
  HUMANSKILL = "奮力一搏",
  DWARFSKILL = "生命力",
  ELVESSKILL = "魅惑",
  FALSE = "失敗",
}
