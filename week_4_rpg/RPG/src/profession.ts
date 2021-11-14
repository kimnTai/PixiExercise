import { playData, Profession, Race, RaceSkill, Status } from "./type";
// 騎士實作類
export class Knight extends Profession {
  attack(injured: Profession): void {
    const damage = this.strength;
    injured.HP -= damage;
    console.log(
      `${this.name} 近距離攻擊 ${injured.name}，造成了 ${damage} 點傷害`
    );
    return;
  }
  baseSkill(): void {
    if (Math.random() >= 0.1) {
      return;
    }
    this.status = Status.COUNTERATTACK;
  }
  proSkill(injured: Profession): void {
    if (Math.random() >= 0.2) {
      return;
    }
    injured.HP -= this.strength * 1.5;
    return;
  }
}
// 盜賊實作類
export class Thieves extends Profession {
  attack(injured: Profession): void {
    const damage = this.strength * 0.8;
    injured.HP -= damage;
    console.log(
      `${this.name} 近距離攻擊 ${injured.name}，造成了 ${damage} 點傷害`
    );
    return;
  }
  baseSkill(): void {
    if (Math.random() >= 0.15) {
      return;
    }
    this.status = Status.DODGE;
  }
  proSkill(injured: Profession): void {
    if (Math.random() >= 0.4) {
      return;
    }
    console.log(`${this.name} : 連擊發動`);
    this.attack(injured);
  }
}
// 法師實作類
export class Wizard extends Profession {
  absorb!: boolean;
  attack(injured: Profession): void {
    if (Math.random() <= 0.2) {
      console.log(`${this.name} 遠距離攻擊 未命中`);
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
      console.log(`${this.name} 吸收發動，回復了 ${damage} 點生命值`);
    }
    return;
  }
  baseSkill(): void {
    if (Math.random() >= 0.1) {
      return;
    }
    this.absorb = true;
  }
  proSkill(injured: Profession): void {
    if (Math.random() >= 0.1) {
      return;
    }
    const damage = this.strength * 2;
    injured.HP -= damage;
    injured.status = Status.DIZZY;
    console.log(
      `${this.name} : 火球發動，造成了 ${damage} 點傷害，${injured.name}暈眩`
    );
    if (this.absorb) {
      this.HP += damage;
      this.absorb = false;
      console.log(`${this.name} 吸收發動，回復了 ${damage} 點生命值`);
    }
    return;
  }
}
