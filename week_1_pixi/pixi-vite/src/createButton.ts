import { Graphics, TextStyle, Text } from "pixi.js";
import { app } from "./app";

/**底部按鈕 */
function createButton(): void {
  const style = new TextStyle({
    fontSize: 36,
    fill: ["#ffffff", "#ffdd00"],
  });
  const button = new Graphics();
  const text = new Text("開始 !", style);
  text.anchor.set(0.5, 0.5);
  text.position.set(app.screen.width / 2, 540);
  button.beginFill(0, 1);
  button.drawRect(0, 480, app.screen.width, 120);
  button.interactive = true;
  button.addListener("click", () => {
    console.log("test");
  });
  app.stage.addChild(button, text);
}

let running: boolean = false;
function startPlay() {
  if (running) {
    return;
  }
  running = true;
}

export { createButton };
