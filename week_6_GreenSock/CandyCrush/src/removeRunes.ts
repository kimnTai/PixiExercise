import { Application, Container } from "pixi.js-legacy";
import { Runes } from "./runes";
import { gsap } from "gsap";

export function removeRunes(app: Application): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const container = app.stage.getChildByName("盤面") as Container;
    const row = container.children as Container[];
    row.forEach((item, rowIndex, rowArray) => {
      const runesArray = item.children as Runes[];
      runesArray.forEach((runes, index, array) => {
        findUp(runes, index, array);
        findRight(runes, index, rowArray, rowIndex);
      });
      // 刪除
      const removeArray = runesArray.filter((runes) => {
        return runes.removeGround != undefined;
      });

      if (removeArray.length > 0) {
        gsap.to(removeArray, {
          duration: 1,
          alpha: 0,
          onComplete: () => {
            removeArray.forEach((removeItem) => {
              item.removeChild(removeItem);
            });
            resolve(true);
          },
        });
      }
    });
  });
}
/**往上找 */
function findUp(runes: Runes, index: number, array: Runes[]): void {
  if (index >= 3) {
    return;
  }
  const up = array[index + 1];
  const upUp = array[index + 2];
  if (runes.name != up.name || runes.name != upUp.name) {
    return; // 如果其中一個不一樣 return
  }
  if (runes.removeGround) {
    up.removeGround = upUp.removeGround = runes.removeGround;
  } else {
    runes.removeGround = Math.random();
    up.removeGround = upUp.removeGround = runes.removeGround;
  }
}

/**往右找 */
function findRight(
  runes: Runes,
  index: number,
  rowArray: Container[],
  rowIndex: number
): void {
  if (rowIndex >= 4) {
    return; // 如果在第五行 return
  }
  const right = rowArray[rowIndex + 1].children[index] as Runes;
  const rightRight = rowArray[rowIndex + 2].children[index] as Runes;
  if (runes.name != right.name || runes.name != rightRight.name) {
    return; // 如果其中一個不一樣 return
  }
  if (runes.removeGround) {
    right.removeGround = rightRight.removeGround = runes.removeGround;
  } else {
    runes.removeGround = Math.random();
    right.removeGround = rightRight.removeGround = runes.removeGround;
  }
}
