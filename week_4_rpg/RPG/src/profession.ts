import { logs } from "./game";
import { BaseSkill, ProSkill } from "./skill";
import { playData, Profession, Race } from "./type";

// 騎士實作類
class Knight extends Profession {
  attack(injured: Profession): void {
    const damage = this.strength;
    injured.HP -= damage;
    console.log(
      `${this.name} 近距離攻擊 ${injured.name}，造成了 ${damage} 點傷害`
    );
    return;
  }
  constructor(data: playData, race: Race) {
    super(data, race);
    this.baseSkill = BaseSkill.counterAttack;
    this.proSkill = ProSkill.strongAttack;
  }
}
// 盜賊實作類
class Thieves extends Profession {
  attack(injured: Profession): void {
    const damage = this.strength * 0.8;
    injured.HP -= damage;
    console.log(
      `${this.name} 近距離攻擊 ${injured.name}，造成了 ${damage} 點傷害`
    );
    return;
  }
  constructor(data: playData, race: Race) {
    super(data, race);
    this.baseSkill = BaseSkill.dodge;
    this.proSkill = ProSkill.doubleAttack;
  }
}
// 法師實作類
class Wizard extends Profession {
  absorb!: boolean;
  attack(injured: Profession): void {
    if (Math.random() <= 0.2) {
      logs.push(`${this.name} 遠距離攻擊 未命中`);
      return;
    }
    const damage = this.strength * 1.2;
    injured.HP -= damage;
    console.log(
      `${this.name} 遠距離攻擊 ${injured.name}，造成了 ${damage} 點傷害`
    );
    if (this.absorb) {
      this.HP += damage;
      this.absorb = false;
      logs.push(`${this.name} 吸收發動，回復了 ${damage} 點生命值`);
    }
    return;
  }
  constructor(data: playData, race: Race) {
    super(data, race);
    this.baseSkill = BaseSkill.Absorb;
    this.proSkill = ProSkill.fireball;
  }
}

export { Knight, Thieves, Wizard };
