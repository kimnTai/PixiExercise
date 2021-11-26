import { Hero, Player } from "./character/hero";
import { Profession } from "./character/profession";
import { State } from "./character/type";

/**計算資訊 */
interface Info {
  state: State[];
  damage: number[];
  heal: number[];
  // 先寫 any
  deBuff?: any[];
}

/**攻擊資訊 */
class DamageInfo implements Info {
  state: State[] = [];
  damage: number[] = [];
  heal: number[] = [];
  deBuff!: [];
  private calculate() {
    /** 檢查攻擊方狀態 ex 暈眩、混亂*/
    this.state.find((item) => {
      switch (item) {
        case State.DIZZY:
          this.damage = [];
          console.log(`${this.attacker.race.hero.name[0]}: ${item}`);
          break;
        case State.CONFUSION:
          // 混亂 -------- 無法攻擊自己 擱置
          console.log(`${this.attacker.race.hero.name[0]}: ${item}`);
          break;
      }
    });
  }
  constructor(public attacker: Profession) {
    attacker.attack(this);
    attacker.baseSkill(this);
    attacker.proSkill(this);
    attacker.race.raceSkill(this);
  }
}

/**防禦資訊 */
class DefenseInfo implements Info {
  state: State[] = [];
  damage: number[] = [];
  heal: number[] = [];
  constructor(public injured: Profession) {
    injured.baseSkill(this);
  }
}
/**顯示結果 */
class ShowResult {
  attacker: Hero;
  injured: Hero;
  attDamage: number = 0;
  defDamage: number = 0;
  result() {}
  private calculate() {
    /** 檢查防守方狀態 ex 反擊、閃避*/
    this.defInfo.state.find((item) => {
      switch (item) {
        case State.COUNTERATTACK:
          this.damInfo.damage.shift();
          console.log(`${this.injured.name[0]}: ${item}`);
          break;
        case State.DODGE:
          this.damInfo.damage = [];
          console.log(`${this.injured.name[0]}: ${item}`);
          break;
      }
    });

    /**計算攻擊方傷害 */
    this.damInfo.damage.forEach((item) => {
      this.attDamage += item;
    });
    /**計算防守方傷害 */
    this.defInfo.damage.forEach((item) => {
      this.defDamage += item;
    });
    /**扣除雙方生命值 */
    this.attacker.Hp -= this.defDamage;
    this.injured.Hp -= this.attDamage;
  }
  /**( 攻擊資訊 ,防禦資訊 ) */
  constructor(public damInfo: DamageInfo, public defInfo: DefenseInfo) {
    this.attacker = this.damInfo.attacker.race.hero;
    this.injured = this.defInfo.injured.race.hero;
    this.calculate();
  }
}

export { Info, DamageInfo, DefenseInfo, ShowResult };
