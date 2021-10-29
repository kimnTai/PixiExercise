// 餓漢式
class Singleton1 {
  // 1. 構造器私有化，外部不能new
  private constructor() {}
  // 2. 本類內部創建物件實例化
  private static instance = new Singleton1();

  public static getInstance() {
    return this.instance;
  }
}
//console.log(Singleton1.getInstance(), "1111");

// 懶漢式
class Singleton2 {
  private constructor() {}
  private static instance: Singleton2 | null = null;
  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Singleton2();
    }
    return this.instance;
  }
}
//console.log(Singleton2.getInstance(), "2222");

enum Singleton {
  INSTANCE,
}

const instance = Singleton.INSTANCE;
const instance1 = Singleton.INSTANCE;
// 枚舉是單例
console.log(instance === instance1);
