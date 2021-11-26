/** 各種狀態：健康、暈眩、閃避、混亂、反擊 */
enum State {
  /**健康 */
  HEALTHY = "健康",
  /**暈眩 */
  DIZZY = "暈眩",
  /**閃避 */
  DODGE = "閃避",
  /**混亂 */
  CONFUSION = "混亂",
  /**反擊 */
  COUNTERATTACK = "反擊",
}

/**種族技能*/
enum Skill {
  /**奮力一搏 */
  HUMANSKILL = "奮力一搏",
  /**生命力 */
  DWARFSKILL = "生命力",
  /**魅惑 */
  ELVESSKILL = "魅惑",
  /**吸收 */
  ABSORB = "吸收",
  /**失敗 */
  FALSE = "失敗",
}

/** 菜單 */
enum menu {
  /**人類 */
  Human = "Human",
  /**矮人 */
  Dwarf = "Dwarf",
  /**妖精 */
  Elves = "Elves",
  /**騎士 */
  Knight = "Knight",
  /**盜賊 */
  Thieves = "Thieves",
  /**法師 */
  Wizard = "Wizard",
}

/**樣式 */
enum style {
  CCC = "background: #CCC; color: #000",
  FDF = "background: #fdfd99; color: #000; font-weight: bold",
}

export { State, Skill, menu, style };
