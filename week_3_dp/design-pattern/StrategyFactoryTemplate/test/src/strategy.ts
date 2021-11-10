interface Strategy {
  doAlgorithm(data: string[]): string[];
}
class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}
class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}
class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  public doSomeBusinessLogic(): void {
    console.log("上下文：使用策略對數據進行排序（不確定它會如何做）");
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}
const context = new Context(new ConcreteStrategyA());
console.log("客戶：策略設置為正常排序。");
context.doSomeBusinessLogic();

console.log("");

console.log("客戶：策略設置為反向排序。");
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
