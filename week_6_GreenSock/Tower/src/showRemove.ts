import { Runes } from "./runes";
import { gsap } from "gsap";

/**刪除特效 */
function showRemove(removeArray: Runes[]): gsap.core.Timeline {
  const showArray = groupBy(removeArray, (item: Runes) => {
    return [item.removeGroundId];
  });
  const timeline = gsap.timeline();
  showArray.forEach((item, index) => {
    timeline.to(
      item,
      {
        duration: 1,
        alpha: 0.2,
      },
      index
    );
  });

  return timeline;
}

/**陣列分組工具 */
function groupBy(array: any[], func: any): any[] {
  let groups: any = {};
  array.forEach((item) => {
    let group = JSON.stringify(func(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return Object.keys(groups).map((group) => {
    return groups[group];
  });
}

export { showRemove };
