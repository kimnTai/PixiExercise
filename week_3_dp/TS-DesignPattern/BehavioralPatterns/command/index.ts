// 訂單類
class Order {
  // 餐桌號碼
  private _diningTable!: number;
  // 所下的餐品及份數
  private _foodDir: Map<string, number> = new Map<string, number>();

  public get foodDir(): Map<string, number> {
    return this._foodDir;
  }
  public setFood(name: string, num: number) {
    this.foodDir.set(name, num);
  }
  public get diningTable(): number {
    return this._diningTable;
  }
  public set diningTable(value: number) {
    this._diningTable = value;
  }
}
// 廚師類
class SeniorChef {
  makeFood(name: string, num: number) {
    console.log(`${num}份 ${name}`);
  }
}
// 抽象命令類
interface Command {
  execute(): void;
}
// 具體命令類
class OrderCommand implements Command {
  // 持有接收者物件
  private _receiver: SeniorChef;
  private _order: Order;
  constructor(receiver: SeniorChef, order: Order) {
    this._receiver = receiver;
    this._order = order;
  }
  execute(): void {
    console.log(`${this._order.diningTable}桌的訂單：`);
    const foodDir: Map<string, number> = this._order.foodDir;
    // 遍歷 map 集合
    foodDir.forEach((value, key) => {
      // value 數量，key 菜名
      this._receiver.makeFood(key, value);
    });
    console.log(`${this._order.diningTable}桌的飯準備完畢。`);
  }
}
// 服務生(屬於請求者角色)
class Waiter {
  // 持有命令物件
  private commands: Command[] = new Array<Command>();
  setCommand(cmd: Command): void {
    // 將 cmd 物件存儲到 list 集合中
    this.commands.push(cmd);
  }
  // 發起命令功能，喊 訂單來了
  orderUp(): void {
    console.log("服務員：大廚，新的訂單來了．．．");
    // 遍歷
    this.commands.forEach((item) => {
      if (item != null) {
        item.execute();
      }
    });
  }
}

class Client {
  static main(): void {
    // 創建第一個訂單物件
    const order1 = new Order();
    order1.diningTable = 1;
    order1.setFood("排骨飯", 1);
    order1.setFood("小杯可樂", 2);
    // 創建第二個訂單物件
    const order2 = new Order();
    order2.diningTable = 2;
    order2.setFood("雞腿飯", 1);
    order2.setFood("小杯雪碧", 1);
    // 創建廚師物件
    const receiver = new SeniorChef();
    // 創建命令物件
    const cmd1 = new OrderCommand(receiver, order1);
    const cmd2 = new OrderCommand(receiver, order2);
    // 創建調用者(服務員物件)
    const invoke = new Waiter();
    invoke.setCommand(cmd1);
    invoke.setCommand(cmd2);
    // 讓服務員發起命令
    invoke.orderUp();
  }
}
Client.main();
