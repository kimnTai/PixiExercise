import { Runes } from "./Runes";
import { gsap } from "gsap";
import { Text } from "pixi.js-legacy";
import { GameMusic } from "./GameMusic";

/**刪除特效、COMBO */
function showRemove(removeArray: Runes[]): Promise<void> {
  return new Promise((resolve) => {
    const appStage = removeArray[0].parent.parent.parent;
    // 陣列根據 removeGroundId 進行分組
    const showArray = groupBy(removeArray, (item: Runes) => {
      return [item.removeGroundId];
    });
    let combo = parseInt(sessionStorage.getItem("combo") || "1");
    const comboText = appStage.getChildByName("combo") as Text;
    const timeline = gsap.timeline();
    showArray.forEach((item: Runes[], index) => {
      const time = 0.5;
      const timeAction = {
        duration: time,
        alpha: 0.2,
        ease: "power1.in",
        onStart: () => {
          comboText.text = `${combo} COMBO`;
          GameMusic.comboPlay(combo);
          combo++;
        },
      };
      timeline.to(item, timeAction, index * time);
    });
    timeline.then(() => {
      sessionStorage.setItem("combo", `${combo}`);
      resolve();
    });
  });
}

/**陣列分組工具 */
function groupBy(array: any[], callback: any): any[] {
  let groups: any = {};
  array.forEach((item) => {
    let group = JSON.stringify(callback(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return Object.keys(groups).map((group) => {
    return groups[group];
  });
}

export { showRemove };
