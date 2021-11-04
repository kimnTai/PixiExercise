// 抽象享元角色
abstract class AbstractBox {
  // 獲取圖形方法
  abstract getShape(): string;
  display(color: string): void {
    console.log(`方塊形狀${this.getShape()}，顏色：${color}`);
  }
}
// 具體享元角色
class IBox extends AbstractBox {
  getShape(): string {
    return "I";
  }
}
class LBox extends AbstractBox {
  getShape(): string {
    return "L";
  }
}
class OBox extends AbstractBox {
  getShape(): string {
    return "O";
  }
}
// 工廠類，將該類設計為單例
class BoxFactory {
  private map: Map<string, AbstractBox>;
  // 在構造方法中進行初始化操作
  private constructor() {
    this.map = new Map<string, AbstractBox>();
    this.map.set("I", new IBox());
    this.map.set("L", new LBox());
    this.map.set("O", new OBox());
  }
  // 提供一個方法獲取工廠類物件
  static getInstance(): BoxFactory {
    return this.factory;
  }
  // 餓漢式
  private static factory: BoxFactory = new BoxFactory();
  // 根據名稱獲取圖刑物件
  getShape(name: string): AbstractBox {
    const item = this.map.get(name);
    if (item == undefined) {
      throw new Error("沒有此圖型");
    }
    return item;
  }
}

class Client {
  static main(): void {
    const box1 = BoxFactory.getInstance().getShape("I");
    box1.display("灰色");
    const box2: AbstractBox = BoxFactory.getInstance().getShape("L");
    box2.display("綠色");
    const box3: AbstractBox = BoxFactory.getInstance().getShape("O");
    box3.display("藍色");
    const box4: AbstractBox = BoxFactory.getInstance().getShape("O");
    box4.display("紅色");
    console.log(`兩次獲取到的圖形物件是否是同一個：${box3 === box4}`);
  }
}
Client.main();
