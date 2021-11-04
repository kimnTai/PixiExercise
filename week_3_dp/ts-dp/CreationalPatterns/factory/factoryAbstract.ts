import { LatteCoffee, AmericanCoffee, Coffee } from "./factorySimple";

// 甜品抽象類
abstract class Dessert {
  public abstract show(): void;
}
class Tiramisu extends Dessert {
  public show(): void {
    console.log("提拉米蘇");
  }
}
class MatchaMousse extends Dessert {
  public show(): void {
    console.log("抹茶慕絲");
  }
}
// 抽象工廠
interface DessertFactory {
  createCoffee(): Coffee;
  createDessert(): Dessert;
}
// 美式風味甜品工廠
class AmericanDessertFactory implements DessertFactory {
  createCoffee(): Coffee {
    return new AmericanCoffee();
  }
  createDessert(): Dessert {
    return new MatchaMousse();
  }
}
// 義大利風味甜品工廠
class ItalyDessertFactory implements DessertFactory {
  createCoffee(): Coffee {
    return new LatteCoffee();
  }
  createDessert(): Dessert {
    return new Tiramisu();
  }
}

class test {
  static main(): void {
    // 創建的是義大利風味甜品工廠
    const factory = new ItalyDessertFactory();
    // 獲取拿鐵咖啡、提拉米蘇甜品
    const coffee: Coffee = factory.createCoffee();
    const dessert: Dessert = factory.createDessert();
    console.log(coffee.getName());
    dessert.show();
  }
}

test.main();
