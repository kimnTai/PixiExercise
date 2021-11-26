// 抽象構建角色 - 速食是由價格和詳情組成
abstract class FastFood {
  private _price: number;
  private _desc: string;
  constructor(price: number, desc: string) {
    this._price = price;
    this._desc = desc;
  }
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }
  get desc(): string {
    return this._desc;
  }
  set desc(value: string) {
    this._desc = value;
  }
  abstract cost(): number;
}
// 具體構建角色
class FriedRice extends FastFood {
  constructor() {
    super(10, "炒飯");
  }
  cost(): number {
    return this.price;
  }
}
class FriedNoodles extends FastFood {
  constructor() {
    super(12, "炒麵");
  }
  cost(): number {
    return this.price;
  }
}
// 裝飾者類(抽象裝飾者角色)
abstract class Garnish extends FastFood {
  // 聲明快餐類的變量
  private _fastFood: FastFood;
  constructor(price: number, desc: string, fastFood: FastFood) {
    super(price, desc);
    this._fastFood = fastFood;
  }

  get fastFood(): FastFood {
    return this._fastFood;
  }
  set fastFood(value: FastFood) {
    this._fastFood = value;
  }
}
//具體裝飾者角色
class Egg extends Garnish {
  constructor(fastFood: FastFood) {
    super(1, "雞蛋", fastFood);
  }
  // 計算價格
  cost(): number {
    return this.price + this.fastFood.cost();
  }
  override get desc(): string {
    return `${super.desc}${this.fastFood.desc}`;
  }
}
class Bacon extends Garnish {
  constructor(fastFood: FastFood) {
    super(2, "培根", fastFood);
  }
  // 計算價格
  cost(): number {
    return this.price + this.fastFood.cost();
  }
  override get desc(): string {
    return `${super.desc}${this.fastFood.desc}`;
  }
}

class Client {
  static main(): void {
    // 點一份炒飯
    let food: FastFood = new FriedRice();
    console.log(`${food.desc}  ${food.cost()}元`);
    // 在上面的炒飯中 加雞蛋
    food = new Egg(food);
    console.log(`${food.desc}  ${food.cost()}元`);
    // 再加一個雞蛋
    food = new Egg(food);
    console.log(`${food.desc}  ${food.cost()}元`);
   //  // 再加一個培根
   //  food = new Bacon(food);
   //  console.log(`${food.desc}  ${food.cost()}元`);
  }
}
Client.main();
