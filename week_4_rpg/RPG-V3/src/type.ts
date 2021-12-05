type RoleInfo = {
  /**攻擊力 */
  strength: number;
  /**最大血量 */
  MaxHP: number;
  /**當前血量 */
  HP: number;
  /**角色狀態 */
  state: State[];
};

/**戰鬥顯示文字 */
type BattleText = {
  [key: string]: string;
};

/** 角色狀態：暈眩、混亂 */
enum State {
  健康 = "健康",
  暈眩 = "暈眩",
  混亂 = "混亂",
}

/**增益效果*/
enum Buff {
  奮力一搏 = 1.5,
}

enum Skill {
  反擊 = "反擊",
  火球 = "火球",
  奮力一搏 = "奮力一搏",
  生命力 = "生命力",
  魅惑 = "魅惑",
  吸收 = "吸收",
}

/** 菜單 */
enum menu {
  人類 = "人類",
  矮人 = "矮人",
  妖精 = "妖精",
  騎士 = "騎士",
  盜賊 = "盜賊",
  法師 = "法師",
}

/**console 樣式 */
enum style {
  CCC = "background: #CCC; color: #000",
  FDF = "background: #fdfd99; color: #000; font-weight: bold",
}

export { RoleInfo, BattleText, State, Buff, Skill, menu, style };
