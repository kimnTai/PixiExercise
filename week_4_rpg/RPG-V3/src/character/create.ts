import { Text } from "pixi.js";
import { Hero, Player } from "./hero";
import { Knight, Thieves, Wizard } from "./profession";
import { Dwarf, Elves, Human } from "./race";
import { menu } from "../type";
import { Game } from "../game";

class Computer {
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
  static _player: Player = new Hero("玩家");
  /**玩家角色創建 */
  static create(pixi: Text) {
    let isCreate = false;
    switch (pixi.text) {
      case menu.人類:
        this._player = new Human(this._player);
        break;
      case menu.矮人:
        this._player = new Dwarf(this._player);
        break;
      case menu.妖精:
        this._player = new Elves(this._player);
        break;
      case menu.騎士:
        this._player = new Knight(this._player);
        isCreate = true;
        break;
      case menu.盜賊:
        this._player = new Thieves(this._player);
        isCreate = true;
        break;
      case menu.法師:
        this._player = new Wizard(this._player);
        isCreate = true;
        break;
    }
    // 選擇種族後，文字更改為選擇職業
    (pixi.parent.children[0] as Text).text = "選擇職業";
    (pixi.parent.children[1] as Text).text = menu.騎士;
    (pixi.parent.children[2] as Text).text = menu.盜賊;
    (pixi.parent.children[3] as Text).text = menu.法師;
    // 如果創建完成 - 開始遊戲
    if (isCreate) {
      Game.Start(this._player);
    }
  }
}

export { Computer, PlayerCreate };
