// 產品物件
class Bike {
  private _frame!: string;
  private _seat!: string;

  public get frame(): string {
    return this._frame;
  }
  public set frame(value: string) {
    this._frame = value;
  }
  public get seat(): string {
    return this._seat;
  }
  public set seat(value: string) {
    this._seat = value;
  }
}

// 構建者
abstract class BuilderBike {
  // 聲明 bike 類型的變量，並進行賦值
  protected bike: Bike = new Bike();

  public abstract buildFrame(): void;
  public abstract buildSeat(): void;
  // 構建自行車的方法
  public abstract createBike(): Bike;
}
// 具體的構建者
class MobileBuilder extends BuilderBike {
  public buildFrame(): void {
    this.bike.frame = "碳纖維車架";
  }
  public buildSeat(): void {
    this.bike.seat = "真皮車坐";
  }
  public createBike(): Bike {
    return this.bike;
  }
}
// Ofo 構建者
class OfoBuilder extends BuilderBike {
  public buildFrame(): void {
    this.bike.frame = "鋁合金車架";
  }
  public buildSeat(): void {
    this.bike.seat = "橡膠車座";
  }
  public createBike(): Bike {
    return this.bike;
  }
}
// 指揮者類
class Director {
  private builder: BuilderBike;
  constructor(builder: BuilderBike) {
    this.builder = builder;
  }
  // 組裝自行車的功能
  public constructBike(): Bike {
    this.builder.buildFrame();
    this.builder.buildSeat();
    return this.builder.createBike();
  }
}

class Client1 {
  static main(): void {
    // 創建指揮者物件
    const director = new Director(new MobileBuilder());
    // 讓指揮者只會組裝自行車
    const bike = director.constructBike();

    console.log(bike.frame);
    console.log(bike.seat);
  }
}


Client1.main();
