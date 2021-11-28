interface RoleInfo {
  /**攻擊力 */
  strength: number;
  /**最大血量 */
  MaxHp: number;
  /**當前血量 */
  Hp: number;
  /**角色狀態 */
  state: State;
}

/** 角色狀態：暈眩、閃避、混亂、反擊 */
enum State {
  健康,
  暈眩,
  閃避,
  混亂,
  反擊,
}

/**技能*/
enum Buff {
  奮力一搏,
  生命力,
  魅惑,
  吸收,
  失敗,
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

export { RoleInfo, State, Buff, menu };
