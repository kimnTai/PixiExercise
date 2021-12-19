import { Application, Container } from "pixi.js-legacy";
import { Runes } from "./runes";
import { gsap } from "gsap";
import { showRemove } from "./showRemove";

/**
 * @description 刪除盤面上三個連續相同的符石
 * @export
 * @param {Application} app
 * @return {*}  {Promise<boolean>}
 */
function removeRunes(app: Application): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const container = app.stage.getChildByName("盤面") as Container;
    const row = container.children as Container[];
    const removeArray: Runes[] = [];
    row.forEach((item) => {
      (item.children as Runes[]).forEach((runes) => {
        findUp(runes);
        findRight(runes);
        if (runes.removeGroundId) {
          removeArray.push(runes);
        }
      });
    });
    const timeline = showRemove(removeArray);
    timeline.then(() => {
      row.forEach((item) => {
        removeArray.forEach((removeItem) => {
          item.removeChild(removeItem);
        });
      });
      resolve(true);
    });
    if (removeArray.length < 1) {
      console.log("停止");
      resolve(false);
    }
  });
}

/**往上找兩個單位 name 是否相同 */
function findUp(runes: Runes): void {
  const index = runes.parent.getChildIndex(runes);
  if (index >= 3) {
    return; // 如果在第四列 return
  }
  const array = runes.parent.children as Runes[];
  const up = array[index + 1];
  const upUp = array[index + 2];
  if (runes.name != up.name || runes.name != upUp.name) {
    return; // 如果其中一個不一樣 return
  }
  if (runes.removeGroundId) {
    up.removeGroundId = upUp.removeGroundId = runes.removeGroundId;
  } else if (up.removeGroundId) {
    upUp.removeGroundId = runes.removeGroundId = up.removeGroundId;
  } else if (upUp.removeGroundId) {
    up.removeGroundId = runes.removeGroundId = upUp.removeGroundId;
  } else {
    runes.removeGroundId = Math.random();
    up.removeGroundId = upUp.removeGroundId = runes.removeGroundId;
  }
}

/**往右找兩個單位 name 是否相同 */
function findRight(runes: Runes): void {
  const rowIndex = runes.parent.parent.getChildIndex(runes.parent);
  if (rowIndex >= 4) {
    return; // 如果在第五行 return
  }
  const index = runes.parent.getChildIndex(runes);
  const rowArray = runes.parent.parent.children as Container[];
  const right = rowArray[rowIndex + 1].children[index] as Runes;
  const rightRight = rowArray[rowIndex + 2].children[index] as Runes;
  if (runes.name != right.name || runes.name != rightRight.name) {
    return; // 如果其中一個不一樣 return
  }
  if (runes.removeGroundId) {
    right.removeGroundId = rightRight.removeGroundId = runes.removeGroundId;
  } else if (right.removeGroundId) {
    rightRight.removeGroundId = runes.removeGroundId = right.removeGroundId;
  } else if (rightRight.removeGroundId) {
    right.removeGroundId = runes.removeGroundId = rightRight.removeGroundId;
  } else {
    runes.removeGroundId = Math.random();
    right.removeGroundId = rightRight.removeGroundId = runes.removeGroundId;
  }
}

export { removeRunes };
