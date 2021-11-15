import { handleClick, gameStart, game } from "./game";
import * as PIXI from "pixi.js-legacy";
import { npcName } from "./player";

export let app!: PIXI.Application;

const init = () => {
  pixiInit();
  setBackground();
  setAttSprite();
  gameStart();
  npcText();
};
init();

app.ticker.add(() => {});

function pixiInit() {
  app = new PIXI.Application({
    width: 800,
    height: 400,
    antialias: true,
    resolution: 1,
  });
  document.querySelector("#app")?.appendChild(app.view);
}
function setBackground() {
  const background = PIXI.Sprite.from("../img/background.png");
  background.width = app.screen.width;
  background.height = app.screen.height;
  app.stage.addChild(background);
}

function setAttSprite() {
  const container = new PIXI.Container();
  const sprite = PIXI.Sprite.from("../img/attack.png");
  const text = new PIXI.Text("攻擊", {
    fontSize: 50,
    fill: ["#000"],
  });
  sprite.anchor.set(0.5);
  text.anchor.set(0.5);
  container.addChild(sprite);
  container.addChild(text);
  container.interactive = true;
  container.addListener("click", () => {
    handleClick();
  });
  container.x = 400;
  container.y = 200;
  app.stage.addChild(container);
}

function npcText() {
  const HPtext = app.stage.addChild(
    new PIXI.Text(
      `剩餘 HP\n${game.playerA.name} : ${game.playerA.HP}，${game.playerB.name} : ${game.playerB.HP}`,
      {
        fontSize: 40,
      }
    )
  );
  const text = app.stage.addChild(
    new PIXI.Text(`對上：${npcName}`, {
      fontSize: 40,
    })
  );
  text.x = 500;
  const sprite = app.stage.addChild(PIXI.Sprite.from("../img/Thieves.png"));
  sprite.x = 100;
  sprite.y = 150;
}

const logs: string[] = ['LOG 測試'];
const logText = app.stage.addChild(
  new PIXI.Text("", {
    fontSize: 14,
  })
);
function onEvent(e: any) {
  const type = e.type;
  const targetName = e.target.name;
  const currentTargetName = e.currentTarget.name;
  // Add event to top of logs
  logs.push(
    `${currentTargetName} received ${type} event (target is ${targetName})`
  );
  if (
    currentTargetName === "stage" ||
    type === "pointerenter" ||
    type === "pointerleave"
  ) {
    logs.push("-----------------------------------------", "");
  }
  // Prevent logs from growing too long
  if (logs.length > 30) {
    while (logs.length > 30) {
      logs.shift();
    }
  }
  // Update logText
  logText.text = logs.join("\n");
}
