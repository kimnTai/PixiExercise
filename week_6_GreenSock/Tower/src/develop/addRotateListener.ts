import { Application, Container, Sprite, Texture } from "pixi.js-legacy";
import { Runes } from "../Runes";

/**
 * @description 轉珠測試，無實際功能
 * @export
 * @param {Application} app
 */
export function addRotateListener(app: Application) {
  const container = app.stage.getChildByName("盤面") as Container;
  const row = container.children as Container[];
  const totalArray: Runes[] = [];
  row.forEach((item) => {
    (item.children as Runes[]).forEach((runes) => {
      totalArray.push(runes);
      toAddListener(runes, totalArray);
    });
  });
}

function toAddListener(runes: Runes, totalArray: Runes[]): void {
  const mouseSprite: Sprite = Sprite.from("h.png");
  mouseSprite.anchor.set(0.5);
  mouseSprite.interactive = true;
  let beforeSprite: Sprite;
  let beforeTexture: Texture;
  let afterTexture: Texture;
  // 點擊珠子監聽按下、移動
  runes
    .on("pointerdown", (event) => {
      beforeTexture = runes.texture;
      beforeSprite = runes;
      runes.alpha = 0.5;
      runes.dragging = true;
      mouseSprite.texture = runes.texture;
      mouseSprite.position.set(event.data.global.x, event.data.global.y);
      appState.addChild(mouseSprite);
    })
    .on("pointermove", (event) => {
      if (!runes.dragging) {
        return; // 如果拖曳中 return
      }
      mouseSprite.position.set(event.data.global.x, event.data.global.y);
      const filterArray = totalArray.filter((item) => item.alpha > 0.5);
      // 尋找碰撞物件
      const touchItem = filterArray.find((item) => {
        return boxesIntersect(mouseSprite, item);
      });
      if (touchItem) {
        beforeSprite.alpha = 1;
        touchItem.alpha = 0.5;
        beforeSprite = touchItem;

        // afterTexture = touchItem.texture;

        // touchItem.texture = beforeTexture;

        // beforeSprite.texture = afterTexture;
      }
    });

  // 滑鼠珠子監聽放開
  const appState = runes.parent.parent;
  mouseSprite.on("pointerup", (event) => {
    appState.removeChild(mouseSprite);
    totalArray.forEach((item) => (item.alpha = 1));
    runes.dragging = false;
    runes.position.set(event.data.global.x, event.data.global.y);
  });
}

/**碰撞檢測函數 */
function boxesIntersect(a: any, b: any): boolean {
  if (a == b) {
    return false;
  }
  let ab = a.getBounds();
  let bb = b.getBounds();
  return (
    ab.x + ab.width / 2 > bb.x &&
    ab.x < bb.x + bb.width / 2 &&
    ab.y + ab.height / 2 > bb.y &&
    ab.y < bb.y + bb.height / 2
  );
}
