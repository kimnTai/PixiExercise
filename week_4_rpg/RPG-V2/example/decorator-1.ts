/**
 * 基本 Component 接口定義了可以通過以下方式更改的操作
 * 裝飾器。
 */
interface Component {
  operation(): string;
}

/**
 * 具體組件提供操作的默認實現。那裡
 * 可能是這些類的幾種變體。
 */
class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}

/**
 * 基裝飾類遵循與其他組件相同的接口。
 * 這個類的主要目的是定義所有的包裝接口
 * 混凝土裝飾器。包裝代碼的默認實現可能
 * 包括一個用於存儲包裝組件的字段和初始化方法
 * 它。
 */
class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  /**
   * 裝飾器將所有工作委託給包裝的組件。
   */
  public operation(): string {
    return this.component.operation();
  }
}

/**
 * 具體裝飾器調用被包裝的對象並以某種方式改變它的結果。
 */
class ConcreteDecoratorA extends Decorator {
  /**
   * 裝飾者可以調用操作的父實現，而不是
   * 直接調用包裝的對象。這種方法簡化了擴展
   * 裝飾器類。
   */
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

/**
 * 裝飾器可以在調用 a 之前或之後執行他們的行為
 * 包裹的對象。
 */
class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

/**
 * 客戶端代碼使用 Component 接口處理所有對象。這個
 * 它可以保持獨立於它工作的具體組件類的方式
 * 和。
 */
function clientCode(component: Component) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * 這樣客戶端代碼就可以支持兩個簡單的組件......
 */
const simple = new ConcreteComponent();
console.log("客戶：我有一個簡單的組件：");
clientCode(simple);
console.log("");

/**
 * ...以及裝飾品。
 *
 * 注意裝飾器不僅可以包裝簡單的組件，還可以包裝其他組件
 * 裝飾器也是如此。
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("客戶：現在我有一個裝飾過的組件：");
clientCode(decorator2);
