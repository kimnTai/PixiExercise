import * as PIXI from "pixi.js-legacy";
import { Spine } from "pixi-spine";
import { app } from "../app";

function dragon(loader: PIXI.Loader, res: any) {
  // 實例化脊椎動畫
  const dragon = new Spine(res.dragon.spineData);
  // 設置動畫播放
  dragon.state.setAnimation(0, "flying", true);
  // 測量脊椎動畫並將其放置在其容器內以將其與原點對齊
  const localRect = dragon.getLocalBounds();
  dragon.position.set(-localRect.x, -localRect.y);

  // 為脊椎動畫創建一個容器並將動畫添加到其中
  const container = new PIXI.Container();
  container.scale.set(0.5);
  container.addChild(dragon);

  app.stage.addChild(container);
}
