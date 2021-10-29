class Person_10 {
  constructor(private _name: string) {}
  get name() {
    return this._name + "加密";
  }
  set name(name: string) {
    const realName = name.split(" ")[0];
    this._name = realName;
  }
}
const person = new Person_10("dell");
console.log(person.name); // 透過 get 得到 dell加密
person.name = "設置";
console.log(person.name); // 透過 set 得到 設置加密

// 單例模式
class Demo {
  // 私有屬性 instance 掛在類上面
  private static instance: Demo;
  private constructor(public name: string) {}
  // 把方法掛在類上面，而不是 實例上面
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("單例");
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
// 結果 demo1 == demo2
console.log("demo1 : " + demo1.name); // demo1 : 單例
console.log("demo2 : " + demo2.name); // demo2 : 單例
