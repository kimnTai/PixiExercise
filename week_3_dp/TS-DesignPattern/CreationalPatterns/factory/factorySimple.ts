export abstract class Coffee {
  public abstract getName(): string;
  public addMilk() {
    console.log("加牛奶");
  }
  public addSugar() {
    console.log("加糖");
  }
}

export class AmericanCoffee extends Coffee {
  public getName(): string {
    return "美式咖啡";
  }
}

export class LatteCoffee extends Coffee {
  public getName(): string {
    return "拿鐵咖啡";
  }
}

class SimpleCoffeeFactory {
  public static createCoffee(type: string) {
    let coffee: Coffee;
    if (type === "american") {
      coffee = new AmericanCoffee();
    } else if (type === "latte") {
      coffee = new LatteCoffee();
    } else {
      throw new Error("沒有你所點的咖啡");
    }
    return coffee;
  }
}

class CoffeeStore {
  public orderCoffee(type: string): Coffee {
    const coffee = SimpleCoffeeFactory.createCoffee(type);
    // 加配料
    coffee.addMilk();
    coffee.addSugar();
    return coffee;
  }
}
// ------- 執行階段 -------
// const store = new CoffeeStore();
// // american latte
// const coffee1 = store.orderCoffee("american");
// console.log(coffee1.getName());

// const coffee2 = store.orderCoffee("latte");
// console.log(coffee2.getName());
