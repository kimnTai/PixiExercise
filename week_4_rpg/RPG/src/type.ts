// 種族介面
interface Race {
  raceSkill(data: Profession): RaceSkill;
}

// 玩家資料，血量、攻擊力、狀態
interface playData {
  name: string; // 玩家暱稱
  MaxHp: number; // 最大血量
  strength: number; // 攻擊力
}

// 職業抽象類
abstract class Profession implements Race, playData {
  name: string;
  MaxHp: number;
  strength: number;
  status: Status = Status.HEALTHY;
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
  raceSkill(data: Profession): RaceSkill {
    throw new Error("Method not implemented.");
  }
  constructor(data: playData, race: Race) {
    this.raceSkill = race.raceSkill;
    this.HP = this.MaxHp = data.MaxHp;
    this.strength = data.strength;
    this.name = data.name;
  }
}

// 狀態
enum Status {
  HEALTHY = "健康",
  DIZZY = "暈眩",
  CONFUSION = "混亂",
  DODGE = "閃避",
  COUNTERATTACK = "反擊",
}

// 種族技能
enum RaceSkill {
  HUMANSKILL = "奮力一搏",
  DWARFSKILL = "生命力",
  ELVESSKILL = "魅惑",
  FALSE = "失敗",
}

enum menu {
  Human = "人類",
  Dwarf = "矮人",
  Elves = "妖精",
  Knight = "騎士",
  Thieves = "盜賊",
  Wizard = "法師",
}

// 樣式
enum style {
  CCC = "background: #CCC; color: #000",
  FDF = "background: #fdfd99; color: #000; font-weight: bold",
}

export { Race, playData, Profession, Status, RaceSkill, menu, style};
