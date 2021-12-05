import { Container, Text } from "pixi.js";
import { app } from ".";
import { PlayerCreate } from "../character/create";
import { Hero } from "../character/hero";
import { menu } from "../type";

/**戰鬥紀錄 */
function logText() {
  sessionStorage.setItem("戰鬥紀錄", JSON.stringify(["戰鬥紀錄"]));

  const logText = app.stage.addChild(
    new Text("", {
      fontSize: 16,
    })
  );
  logs.push("-------");
  app.ticker.add(() => {
    logText.text = logs.join("\n");
    if (logs.length > 20) {
      logs.shift();
    }
  });
}

/**創建選擇種族文字 */
function createRace(): void {
  const container = new Container();
  container.name = "選擇種族";
  const logText = new Text("選擇種族", {
    fontSize: 32,
  });
  const Human = new Text(menu.人類, {
    fontSize: 50,
  });
  const Dwarf = new Text(menu.矮人, {
    fontSize: 50,
  });
  const Elves = new Text(menu.妖精, {
    fontSize: 50,
  });
  Human.y = 50;
  Dwarf.y = Human.y + 60;
  Elves.y = Dwarf.y + 60;
  container.addChild(logText, Human, Dwarf, Elves);
  Human.interactive = Dwarf.interactive = Elves.interactive = true;
  // 根據點擊文字創建角色
  Human.addListener("click", () => {
    PlayerCreate.create(Human);
  });
  Dwarf.addListener("click", () => {
    PlayerCreate.create(Dwarf);
  });
  Elves.addListener("click", () => {
    PlayerCreate.create(Elves);
  });
  container.y = 50;
  app.stage.addChild(container);
}

// 再來一局按鈕
document.querySelector("button")?.addEventListener("click", again);
let logs: string[] = [" 戰鬥紀錄"];
function again() {
  logs = [" 戰鬥紀錄\n-------"];
  app.stage.removeChildren(4, 6);
  PlayerCreate._player = new Hero("玩家");
  app.loader.load(createRace);
}

export { logText, createRace };
