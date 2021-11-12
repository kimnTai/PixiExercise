import { Handler, PersonA } from "./Handler";

// 工廠設計模式
export class Factory {
  private static strategyMap: Map<string, Handler> = new Map();

  static getStrategy(name: string): Handler {
    const strategy = Factory.strategyMap.get(name);
    if (strategy) {
      return strategy;
    } else {
      throw new Error("不存在");
    }
  }
  static register(name: string, handler: Handler) {
    if (handler == null) {
      return;
    }
    this.strategyMap.set(name, handler);
  }
}
