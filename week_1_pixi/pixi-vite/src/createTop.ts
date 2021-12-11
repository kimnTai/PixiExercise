import { Graphics, TextStyle, Text } from "pixi.js";
import { app } from "./app";

export function createTop(): void {
  const style = new TextStyle({
    fontSize: 36,
    fill: ["#ffffff", "#ffdd00"],
  });
  const top = new Graphics();
  const text = new Text("角子老虎機 !", style);
  text.anchor.set(0.5, 0.5);
  text.position.set(app.screen.width / 2, 60);
  top.beginFill(0, 1);
  top.drawRect(0, 0, app.screen.width, 120);

  app.stage.addChild(top, text);
}
