import { Application, Container, Sprite, Text, Texture } from "pixi.js";
import { showAttack, showDeath } from "./show_event";

const app: Application = new Application({
  width: 800,
  height: 400,
  antialias: true,
  resolution: 1,
});

/**PIXI 初始化加載所有內容 */
function pixiInit(): void {
  document.querySelector("#app")?.appendChild(app.view);
  // 加載
  app.loader
    .add("attack.png", "../img/attack.png")
    .add("attack_black.png", "../img/attack_black.png")
    .add("background.png", "../img/background.png")
    .add("Knight.png", "../img/Knight.png")
    .add("Thieves.png", "../img/Thieves.png")
    .add("Wizard.png", "../img/Wizard.png")
    .load(setBackground)
    .load(setAttSprite)
    .load(setPlayer);
}

/**背景設置 */
function setBackground(): void {
  const background = Sprite.from("background.png");
  const background_2 = Sprite.from("background.png");
  background.width = app.screen.width;
  background.height = app.screen.height;
  background_2.width = app.screen.width;
  background_2.height = app.screen.height;
  background_2.x = -app.screen.width;

  app.ticker.add((time) => {
    if (background.x >= app.screen.width) {
      background.x = -app.screen.width;
    }
    if (background_2.x >= app.screen.width) {
      background_2.x = -app.screen.width;
    }
    background.x += 1;
    background_2.x += 1;
  });

  app.stage.addChild(background, background_2);
}

/**攻擊按鈕設置 */
function setAttSprite(): void {
  const container = new Container();
  const sprite = Sprite.from("attack.png");
  const text = new Text("攻擊", {
    fontSize: 50,
    fill: ["#000"],
  });
  sprite.anchor.set(0.5);
  text.anchor.set(0.5);
  container.addChild(sprite, text);
  container.interactive = true;
  container.addListener("click", () => {
    showAttack(app);
  });
  container.x = 500;
  container.y = 200;
  app.stage.addChild(container);
}

/**雙方角色圖像設置 */
function setPlayer() {
  const playerContainer = new Container();
  const playerSprite = Sprite.from("Knight.png");
  playerSprite.anchor.set(0.5, 1);
  playerContainer.x = 362;
  playerContainer.y = 325;

  playerContainer.addChild(playerSprite);
  const npcContainer = new Container();
  const npcSprite = Sprite.from("Wizard.png");
  npcSprite.anchor.set(0.5, 1);
  npcContainer.addChild(npcSprite);
  npcContainer.y = 325;
  npcContainer.x = app.screen.width - 224 + 62;
  // 將玩家、NPC 設置到舞台
  app.stage.addChild(playerContainer, npcContainer);
}

export { app, setPlayer, pixiInit };
