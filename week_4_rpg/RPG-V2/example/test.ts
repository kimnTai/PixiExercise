/**
 * 參考範例
 * 嘗試套用裝飾者模式
 * 理想：將英雄作為基礎組件，藉由種族、職業等一層層裝飾上去
 *
 * 感覺不太順，pass
 */

// abstract class Player {
//   state: State[] = []; // 狀態
//   strength: number = 10; // 攻擊力
//   MaxHp: number = 300; // 最大血量
//   Hp: number = 300; // 當前血量
//   name: string; // 玩家暱稱
//   abstract normalAttack(): void;
//   abstract passiveSkill(info: Info): void;
//   abstract baseSkill(): void;
//   abstract proSkill(): void;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// // 英雄實作類 - 基礎組件
// class Hero extends Player {
//   normalAttack(): void {
//     throw new Error("Method not implemented.");
//   }
//   passiveSkill(info: Info): void {
//     throw new Error("Method not implemented.");
//   }
//   baseSkill(): void {
//     throw new Error("Method not implemented.");
//   }
//   proSkill(): void {
//     throw new Error("Method not implemented.");
//   }
// }

// // 裝飾者類(抽象裝飾者角色)
// abstract class Decorator extends Player {
//   player: Player;
//   constructor(name: string, player: Player) {
//     super(name);
//     this.player = player;
//   }
// }

// // 人族實作類 (具體裝飾者角色)
// class Human extends Decorator {
//   constructor(player: Player) {
//     super("人類", player);
//   }
//   override passiveSkill(info: Info): void {
//     const MaxHp = this.MaxHp;
//     const Hp = this.Hp;
//     if (Hp / MaxHp <= 0.2) {
//       info.damage = info.damage * 1.5;
//     }
//   }

//   normalAttack(): void {
//     throw new Error("Method not implemented.");
//   }
//   baseSkill(): void {
//     throw new Error("Method not implemented.");
//   }
//   proSkill(): void {
//     throw new Error("Method not implemented.");
//   }
// }

// interface Info {
//   state: State[];
//   damage: number;
//   health: number;
// }

// // 狀態
// enum State {
//   HEALTHY = "健康",
//   DIZZY = "暈眩",
//   DODGE = "閃避",
//   CONFUSION = "混亂",
//   COUNTERATTACK = "反擊",
// }

// // 種族技能
// enum Skill {
//   HUMANSKILL = "奮力一搏",
//   DWARFSKILL = "生命力",
//   ELVESSKILL = "魅惑",
//   FALSE = "失敗",
// }

// enum menu {
//   Human = "人類",
//   Dwarf = "矮人",
//   Elves = "妖精",
//   Knight = "騎士",
//   Thieves = "盜賊",
//   Wizard = "法師",
// }
