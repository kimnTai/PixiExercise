import { Text } from "pixi.js";
import { Hero, Player } from "./hero";
import { Knight, Thieves, Wizard } from "./profession";
import { Dwarf, Elves, Human } from "./race";
import { app } from "../component";
import { menu } from "../type";
import { Game } from "../game";
import { setPlayer } from "../component/setPlayer";

class NPC {
  /**NPC 種族、職業隨機產生 */
  static create(): Player {
    let computer = new Hero("電腦");
    // 隨機產生種族
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        computer = new Human(computer);
        break;
      case 1:
        computer = new Dwarf(computer);
        break;
      case 2:
        computer = new Elves(computer);
        break;
    }
    // 隨機產生職業
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        computer = new Knight(computer);
        break;
      case 1:
        computer = new Thieves(computer);
        break;
      case 2:
        computer = new Wizard(computer);
        break;
    }
    console.log(`對上：${computer.name}`);
    return computer;
  }
}

class PlayerCreate {
  /**玩家角色實體 */
  static player: Player = new Hero("玩家");
  /**玩家角色創建 */
  static create(pixi: Text) {
    let player = this.player;
    let isCreate = false;
    switch (pixi.text) {
      case menu.人類:
        player = new Human(player);
        break;
      case menu.矮人:
        player = new Dwarf(player);
        break;
      case menu.妖精:
        player = new Elves(player);
        break;
      case menu.騎士:
        player = new Knight(player);
        isCreate = true;
        break;
      case menu.盜賊:
        player = new Thieves(player);
        isCreate = true;
        break;
      case menu.法師:
        player = new Wizard(player);
        isCreate = true;
        break;
    }
    // 選擇種族後，文字更改為選擇職業
    (pixi.parent.children[0] as Text).text = "選擇職業";
    (pixi.parent.children[1] as Text).text = menu.騎士;
    (pixi.parent.children[2] as Text).text = menu.盜賊;
    (pixi.parent.children[3] as Text).text = menu.法師;
    // 如果創建完成 - 開始遊戲 & 設置角色
    if (isCreate) {
      //return player;
      pixi.parent.renderable = false;
      app.stage.removeChildAt(4);
      Game.Start(player);
      setPlayer(pixi.text); // 設置角色
    }
  }
}

export { NPC, PlayerCreate };
