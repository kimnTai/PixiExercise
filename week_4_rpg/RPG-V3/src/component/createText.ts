import { Application, Container, Text } from "pixi.js";
import { PlayerCreate } from "../character/create";
import { menu } from "../type";

/**創建文字 */
class CreateText {
  constructor(private app: Application) {
    this.battleText();
    this.choseText();
    this.addClickEvent();
  }
  /**戰鬥紀錄 */
  battleText(): void {
    const logText = this.app.stage.addChild(
      new Text("", {
        fontSize: 16,
      })
    );
    sessionStorage.setItem("戰鬥紀錄", JSON.stringify([" 戰鬥紀錄\n-------"]));
    this.app.ticker.add(() => {
      const textArray: string[] = JSON.parse(
        sessionStorage.getItem("戰鬥紀錄") || ""
      );
      logText.text = textArray.join("\n");
      if (textArray.length > 20) {
        textArray.shift();
      }
      sessionStorage.setItem("戰鬥紀錄", JSON.stringify(textArray));
    });
  }
  /**選擇文字 */
  choseText(): void {
    const container = new Container();
    const choseText = new Text("選擇種族", {
      fontSize: 32,
    });
    const text1 = new Text(menu.人類, {
      fontSize: 50,
    });
    const text2 = new Text(menu.矮人, {
      fontSize: 50,
    });
    const text3 = new Text(menu.妖精, {
      fontSize: 50,
    });
    container.name = "選擇種族";
    container.y = 50;
    text1.y = 50;
    text2.y = text1.y + 60;
    text3.y = text2.y + 60;
    text1.interactive = text2.interactive = text3.interactive = true;
    container.addChild(choseText, text1, text2, text3);
    this.app.stage.addChild(container);
  }
  /**點擊事件 */
  addClickEvent(): void {
    const container = this.app.stage.getChildByName("選擇種族") as Container;
    for (let i = 1; i < 4; i++) {
      container.children[i].addListener("click", () => {
        PlayerCreate.create(container.children[i] as Text);
      });
    }
  }
}

export { CreateText };
