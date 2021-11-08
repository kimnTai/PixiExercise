import { Handler } from "./Handler";

// 工廠設計模式
export class Factory {
  private static strategyMap: Map<string, Handler> = new Map();

  public static getStrategy(name: string): Handler {
    console.log(Factory.strategyMap);

    return this.strategyMap.get(name);
  }
  public static register(name: string, handler: Handler) {
    if (handler == null) {
      return;
    }
    this.strategyMap.set(name, handler);
  }
}
