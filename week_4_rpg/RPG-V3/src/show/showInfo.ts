import { Player } from "../character/hero";
import { Info } from "../info";
import { Skill, State } from "../type";
import { ShowEvent } from "./showEvent";

/**分析 Info 並顯示動畫 */
class ShowInfo {
  /**對外初始方法 */
  static async init(
    attacker: Player,
    defenser: Player,
    attInfo: Info,
    defInfo: Info
  ): Promise<void> {
    this.showText(attInfo, defInfo);
    // 狀態動畫
    if (attInfo.state.includes(State.暈眩)) {
      await ShowEvent.showDizzy(attacker.name[0]);
      return;
    }
    // 防守方動畫
    if (defInfo.skill.includes(Skill.反擊)) {
      ShowEvent.showShield(defenser.name[0]);
    } else if (defInfo.skill.includes(Skill.閃避)) {
      ShowEvent.showMiss(defenser.name[0]);
    }
    // 攻擊方動畫
    if (attInfo.skill.includes(Skill.火球)) {
      await ShowEvent.showFireBall(attacker.name[0]);
    } else if (attInfo.skill.includes(Skill.連擊)) {
      console.log(attInfo.text.proSkill);
      await ShowEvent.showDouble(attacker.name[0]);
    } else {
      await ShowEvent.showAttack(attacker.name[0]);
    }
  }
  /**文字紀錄 */
  static showText(attInfo: Info, defInfo: Info) {
    // 如果空物件 -> return
    if (Object.keys(attInfo.text).length == 0) {
      return;
    }
    const textArray: string[] = JSON.parse(
      sessionStorage.getItem("戰鬥紀錄") || ""
    );
    // 取得 attInfo.text 陣列，並 push 到 sessionStorage
    Object.values(attInfo.text).forEach((item) => {
      textArray.push(item);
    });
    sessionStorage.setItem("戰鬥紀錄", JSON.stringify(textArray));
  }
  /**死亡特效 */
  static death(name: string): Promise<string> {
    return ShowEvent.death(name);
  }
}

export { ShowInfo };
