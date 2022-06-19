import * as PIXI from "pixi.js-legacy";
import { State, StateSystem } from "pixi.js-legacy";
import dragon from "./example/dragon";
import { monster } from "./example/monster";
import { Spine } from "pixi-spine";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
    (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export const app = new PIXI.Application({
    width: 800,
    height: 600,
});
document.querySelector("#app").appendChild(app.view);

app.loader.add("dragon", "../assets/dragon/dragon.json").load(async (loader: PIXI.Loader, res: any) => {
    // 實例化脊椎動畫
    const dragon = new Spine(res.dragon.spineData);
    // 設置動畫播放
    //dragon.state.setAnimation(0, "flying", false);
    dragon.state.addAnimation(0, "flying", false, 0);
    // 測量脊椎動畫並將其放置在其容器內以將其與原點對齊
    const localRect = dragon.getLocalBounds();
    dragon.position.set(-localRect.x, -localRect.y);
    // 為脊椎動畫創建一個容器並將動畫添加到其中
    const container = new PIXI.Container();
    container.scale.set(0.5);
    container.addChild(dragon);
    app.stage.addChild(container);
    await new Promise((complete) => dragon.state.addListener({ complete }));
    dragon.state.clearListeners();
    console.log(dragon);
});
