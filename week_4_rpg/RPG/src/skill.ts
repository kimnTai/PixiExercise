import { logs } from "./game";
import { Profession, Status } from "./type";

class BaseSkill {
  static strength: number;
  static status: Status;
  static absorb: boolean;
  static counterAttack(this: any): void {
    if (Math.random() >= 0.1) {
      return;
    }
    this.status = Status.COUNTERATTACK;
  }
  static dodge(): void {
    if (Math.random() >= 0.15) {
      return;
    }
    this.status = Status.DODGE;
  }
  static Absorb(): void {
    if (Math.random() >= 0.1) {
      return;
    }
    this.absorb = true;
  }
}

class ProSkill {
  static strength: number;
  static name: any; // 報錯，不管它
  static status: Status;
  static absorb: any;
  static HP: number;
  static strongAttack(injured: Profession): void {
    if (Math.random() >= 0.2) {
      return;
    }
    injured.HP -= this.strength * 1.5;
    logs.push(`${this.name} 重擊發動，造成了 ${this.strength * 1.5} 點傷害`);
    return;
  }
  static doubleAttack(injured: Profession): void {
    if (Math.random() >= 0.4) {
      return;
    }
    logs.push(`${this.name} : 連擊發動`);
    this.attack(injured);
  }
  private static attack(injured: Profession) {
    throw new Error("Method not implemented.");
  }

  static fireball(injured: Profession): void {
    if (Math.random() >= 0.1) {
      return;
    }
    const damage = this.strength * 2;
    injured.HP -= damage;
    injured.status = Status.DIZZY;
    logs.push(
      `${this.name} : 火球發動，造成了 ${damage} 點傷害，${injured.name}暈眩`
    );
    if (this.absorb) {
      this.HP += damage;
      this.absorb = false;
      logs.push(`${this.name} 吸收發動，回復了 ${damage} 點生命值`);
    }
    return;
  }
}

export { BaseSkill, ProSkill };
