import { Container, Sprite } from "pixi.js";
import { app } from ".";
import { Player } from "../character/hero";
import { Info } from "../info";
import { Skill, State } from "../type";

class ShowInfo {
  /**對外初始方法 */
  static async init(
    attacker: Player,
    defenser: Player,
    attInfo: Info,
    defInfo: Info
  ): Promise<void> {
    if (attInfo.state.includes(State.暈眩)) {
      await this.showDizzy(attacker.name[0]);
    } else if (attInfo.skill.includes(Skill.火球)) {
      await this.showFireBall(attacker.name[0]);
    } else if (defInfo.skill.includes(Skill.反擊)) {
      this.showShield(attacker.name[0]);
      await this.showAttack(attacker.name[0]);
    } else {
      await this.showAttack(attacker.name[0]);
    }
  }
  /**死亡特效 */
  static death(name: string): Promise<string> {
    const container = app.stage.getChildByName(name) as Container;
    let counter = 0;
    let sign = 1;
    return new Promise((resolve) => {
      // 玩家死亡 => sign 逆時針方向
      if (name == "玩家") {
        sign = -1;
      }
      app.ticker.add(p1);
      /**角色轉 90度， */
      function p1() {
        container.children[0].angle += 1 * sign;
        counter++;
        if (counter == 90) {
          app.ticker.remove(p1);
          resolve("已完成");
        }
      }
    });
  }
  /**暈眩特效 */
  private static showDizzy(name: string): Promise<string> {
    const container = app.stage.getChildByName(name) as Container;
    let counter = 0;
    let sign = 1;
    return new Promise((resolve) => {
      app.ticker.add(p1);
      /**順時針轉30度 -> 逆時針轉60度 -> 順時針轉30度 */
      function p1() {
        container.children[0].angle += 1 * sign;
        counter++;
        if (counter == 30) {
          sign *= -1;
        } else if (counter == 90) {
          sign *= -1;
        } else if (counter == 120) {
          app.ticker.remove(p1);
          resolve("已完成");
        }
      }
    });
  }
  /**普通攻擊特效 */
  private static showAttack(name: string): Promise<string> {
    const attacker = app.stage.getChildByName(name) as Container;
    let counter = 0;
    let sign = 1;
    if (name == "電腦") {
      sign = -1;
    }
    return new Promise((resolve) => {
      app.ticker.add(p1);
      /**向前移動 */
      function p1() {
        attacker.children[0].x += 10 * sign;
        counter++;
        if (counter == 20) {
          /**反方向移動 */
          sign *= -1;
        } else if (counter == 40) {
          app.ticker.remove(p1);
          resolve("已完成");
        }
      }
    });
  }
  /** 格檔特效 */
  private static showShield(name: string): Promise<string> {
    const shield = Sprite.from("Shield.png");
    let counter = 0;
    let sign = -1;
    if (name == "電腦") {
      sign = 1;
    }
    shield.anchor.set(0.5, 0.5);
    shield.scale.x = -1 * sign;
    shield.position.set(510 - 100 * sign, 270);
    app.stage.addChild(shield);
    return new Promise((resolve) => {
      app.ticker.add(p1);
      function p1() {
        counter++;
        if (counter == 50) {
          app.stage.removeChild(shield);
          app.ticker.remove(p1);
          resolve("已完成");
        }
      }
    });
  }
  /**火球特效 */
  private static showFireBall(name: string): Promise<string> {
    const fireBall = Sprite.from("FireBall.png");
    let counter = 0;
    let sign = 1;
    if (name == "電腦") {
      sign = -1;
    }
    fireBall.anchor.set(0.5, 0.5);
    fireBall.scale.x = -1 * sign;
    // 起始玩家 x = 410，電腦 x = 610
    fireBall.position.set(510 - 100 * sign, 270);
    app.stage.addChild(fireBall);
    return new Promise((resolve) => {
      app.ticker.add(p1);
      function p1() {
        fireBall.x += 8 * sign;
        counter++;
        if (counter == 25) {
          app.stage.removeChild(fireBall);
          app.ticker.remove(p1);
          resolve("已完成");
        }
      }
    });
  }
}

export { ShowInfo };
