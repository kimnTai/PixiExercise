import { Factory } from "./Factory";
import { Handler, PersonA } from "./Handler";

// 使用策略＋工廠＋模板改寫 if else
class ClientAfter {
  static main(): void {
    const spring = new PersonA();
    spring.afterPropertiesSet();

    const name = "張三";
    // 獲取策略類
    const strategy: Handler = Factory.getStrategy(name);
    // 執行邏輯
    // strategy.logic(name);
  }
}
ClientAfter.main();
// 業務邏輯不相同，使用模板方法
