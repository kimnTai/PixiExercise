import { LatteCoffee, AmericanCoffee, Coffee } from "./factorySimple";

// 抽象工廠
interface CoffeeFactory {
  // 創建咖啡物件的方法
  createCoffee(): Coffee;
}

// 美式咖啡工廠
class AmericanCoffeeFactory implements CoffeeFactory {
  createCoffee(): Coffee {
    return new AmericanCoffee();
  }
}

// 拿鐵咖啡工廠
class LatteCoffeeFactory implements CoffeeFactory {
  createCoffee(): Coffee {
    return new LatteCoffee();
  }
}

class CoffeeStore2 {
  private factory!: CoffeeFactory;
  constructor() {}
  // 依賴於工廠
  public setFactory(factory: CoffeeFactory): void {
    this.factory = factory;
  }
  public orderCoffee(): Coffee {
    const coffee = this.factory.createCoffee();
    coffee.addMilk();
    coffee.addSugar();
    return coffee;
  }
}
// ------- 執行階段 -------
const store = new CoffeeStore2();
// 創建工廠
// const factory = new AmericanCoffeeFactory();
// const factory = new LatteCoffeeFactory();
// store.setFactory(factory);
// // 點咖啡
// const coffee = store.orderCoffee();
// console.log(coffee.getName());
