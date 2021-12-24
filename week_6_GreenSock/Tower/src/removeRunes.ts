import { Application, Container } from "pixi.js-legacy";
import { Runes } from "./Runes";
import { showRemove } from "./showRemove";

/**
 * @description 刪除盤面上三個連續相同的珠子
 * @param {Application} app
 * @returns {*}  {Promise<boolean>}
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
    if (removeArray.length < 1) {
      console.log("停止");
      sessionStorage.setItem("combo", `1`);
      resolve(false);
      return;
    }
    // 表演完成後實際刪除
    showRemove(removeArray).then(() => {
      row.forEach((item) => {
        removeArray.forEach((removeItem) => {
          item.removeChild(removeItem);
        });
      });
      resolve(true);
    });
  });
}

/**往上找兩個單位 texture 是否相同 */
function findUp(runes: Runes): void {
  const index = runes.parent.getChildIndex(runes);
  if (index >= 3) {
    return; // 如果在第四列 return
  }
  const array = runes.parent.children as Runes[];
  const up = array[index + 1];
  const upUp = array[index + 2];
  findRemoveGroundID(runes, up, upUp);
}

/**往右找兩個單位 texture 是否相同 */
function findRight(runes: Runes): void {
  const rowIndex = runes.parent.parent.getChildIndex(runes.parent);
  if (rowIndex >= 4) {
    return; // 如果在第五行 return
  }
  const index = runes.parent.getChildIndex(runes);
  const rowArray = runes.parent.parent.children as Container[];
  const right = rowArray[rowIndex + 1].children[index] as Runes;
  const rightRight = rowArray[rowIndex + 2].children[index] as Runes;
  findRemoveGroundID(runes, right, rightRight);
}

/**比對 texture 尋找刪除ID */
function findRemoveGroundID(runes: Runes, second: Runes, third: Runes): void {
  if (runes.texture != second.texture || runes.texture != third.texture) {
    return; // 如果其中一個不一樣 return
  }
  if (runes.removeGroundId) {
    second.removeGroundId = third.removeGroundId = runes.removeGroundId;
  } else if (second.removeGroundId) {
    third.removeGroundId = runes.removeGroundId = second.removeGroundId;
  } else if (third.removeGroundId) {
    second.removeGroundId = runes.removeGroundId = third.removeGroundId;
  } else {
    runes.removeGroundId = Math.random();
    second.removeGroundId = third.removeGroundId = runes.removeGroundId;
  }
}

export { removeRunes };
