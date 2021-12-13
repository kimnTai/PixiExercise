import { Spine } from "pixi-spine";
import { app } from "./app";

function loadGoblins(loader: any, res: any): void {
  const goblin = new Spine(res.goblins.spineData);
  goblin.interactive = true;
  // 設置 skin
  goblin.skeleton.setSkinByName("goblin");
  goblin.position.set(300);
  goblin.state.setAnimation(0, "walk", true);
  // 點擊換 skin
  goblin.addListener("click", () => {
    let name: string;
    switch (goblin.skeleton.skin.name) {
      case "goblin":
        name = "goblingirl";
        break;
      case "goblingirl":
        name = "goblin";
    }
    goblin.skeleton.setSkinByName(name);
  });

  app.stage.addChild(goblin);
}
