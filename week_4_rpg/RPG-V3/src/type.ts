interface State {
  /**玩家暱稱 */
  name: string[];
  /**攻擊力 */
  strength: number;
  /**最大血量 */
  MaxHp: number;
  /**當前血量 */
  Hp: number;
}

enum SkillType {
  /**攻擊 */
  Attack,
  /**治癒 */
  Heal,
  /**狀態 */
  Buffer,
}

/** 角色狀態：健康、暈眩、閃避、混亂、反擊 */
enum characterStatus {
  暈眩,
  混亂,
}

/**技能*/
enum Skill {
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

export { State, SkillType, characterStatus, Skill, menu };
