// 抽象策略類
interface Strategy {
  show(): void;
}
// 具體策略類，封裝算法
class StrategyA implements Strategy {
  show(): void {
    console.log("買一送一");
  }
}
class StrategyB implements Strategy {
  show(): void {
    console.log("滿２００減５０");
  }
}
class StrategyC implements Strategy {
  show(): void {
    console.log("滿１０００元加一元換購任意２００元以下商品");
  }
}
// 銷售員：環境角色(Context)
class SalesMan {
  // 聚合策略類物件
  private _strategy: Strategy;
  public get strategy(): Strategy {
    return this._strategy;
  }
  public set strategy(value: Strategy) {
    this._strategy = value;
  }
  constructor(strategy: Strategy) {
    this._strategy = strategy;
  }
  // 由促銷員展示促銷活動給用戶
  salesManShow(): void {
    this._strategy.show();
  }
}
class Client {
  static main(): void {
    // 春節，使用春節促銷活動
    const salesman = new SalesMan(new StrategyA());
    // 展示促銷活動
    salesman.salesManShow();
    salesman.strategy = new StrategyB();
    salesman.salesManShow();
    salesman.strategy = new StrategyC();
    salesman.salesManShow();
  }
}
Client.main();
