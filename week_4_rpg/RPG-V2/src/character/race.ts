import { Info } from "../system";
import { Hero } from "./hero";
import { menu, Skill, State } from "./type";

/**種族抽象類 */
abstract class Race {
  abstract raceSkill(info: Info): void;
  constructor(public hero: Hero) {}
}

/**人族實作類 */
class Human extends Race {
  /**奮力一搏:血量低於 20 %時，所有傷害提升 50%  */
  raceSkill(info: Info): void {
    const MaxHp = this.hero.MaxHp;
    const Hp = this.hero.Hp;
    if (Hp / MaxHp <= 0.2) {
      info.damage.forEach((item, index, array) => {
        array[index] = item * 1.5;
      });
    }
  }
  constructor(hero: Hero) {
    super(hero);
    hero.name.push(menu.Human);
  }
}

/**矮人實作類 */
class Dwarf extends Race {
  /**生命力:血量低於 50% 時，回復 5% 生命  */
  raceSkill(info: Info): void {
    const MaxHp = this.hero.MaxHp;
    const Hp = this.hero.Hp;
    if (Hp / MaxHp <= 0.5) {
      const health = this.hero.MaxHp * 0.03;
      this.hero.Hp += health;
      console.log(
        `${this.hero.name} : ${Skill.DWARFSKILL}發動，回復了 ${health} 點生命值`
      );
    }
  }
  constructor(hero: Hero) {
    super(hero);
    hero.name.push(menu.Dwarf);
  }
}

/**妖精實作類 */
class Elves extends Race {
  /**魅惑:攻擊時有 10 % 機率造成混亂，讓敵人下回合以普攻攻擊自己  */
  raceSkill(info: Info): void {
    if (Math.random() <= 0.1) {
      info.deBuff?.push(State.CONFUSION);
    }
  }
  constructor(hero: Hero) {
    super(hero);
    hero.name.push(menu.Elves);
  }
}
export { Race, Human, Dwarf };
