import { Factory } from "./Factory";
import { Handler, PersonA } from "./Handler";

// 使用策略＋工廠＋模板改寫 if else
class ClientAfter {
  static main(): void {
    // 希望由 框架幫我們產生物件
    const Spring = new PersonA();
    Spring.setToFactory();

    const name = "張三";
    // 獲取策略類
    const strategy = Factory.getStrategy(name);
    //執行邏輯
    strategy.logic(name);
    // 結果： 張三完成任務
  }
}
ClientAfter.main();
