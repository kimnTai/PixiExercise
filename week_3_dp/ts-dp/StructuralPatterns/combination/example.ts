abstract class Organization {
  private _name: string;
  private _desc: string;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get desc(): string {
    return this._desc;
  }
  public set desc(value: string) {
    this._desc = value;
  }

  constructor(name: string, desc: string) {
    this._name = name;
    this._desc = desc;
  }

  protected add(name: string, org: Organization): void {}
  protected remove(name: string): void {}
  abstract print(): void;
}
class University extends Organization {
  // 核心代码，将子节点存放于 orgList 中
  private orgList = new Map<string, Organization>();

  constructor(name: string, desc: string) {
    super(name, desc);
  }
  add(name: string, org: Organization): void {
    this.orgList.set(name, org);
  }
  remove(name: string): void {
    this.orgList.delete(name);
  }
  print(): void {
    console.log(`--${this.name} —— ${this.desc}--`);
    this.orgList.forEach((item) => {
      item.print();
    });
  }
}

class Department extends Organization {
  constructor(name: string, desc: string) {
    super(name, desc);
  }

  print(): void {
    console.log(`${this.name} —— ${this.desc}`);
  }
}
class College extends Organization {
  private orgList = new Map<string, Organization>();
  constructor(name: string, desc: string) {
    super(name, desc);
  }
  add(name: string, org: Organization): void {
    this.orgList.set(name, org);
  }
  remove(name: string): void {
    this.orgList.delete(name);
  }
  print(): void {
    console.log(`\n-${this.name} —— ${this.desc}-`);
    this.orgList.forEach((item) => {
      item.print();
    });
  }
}

/**
 *   組合模式（Composite Pattern），又叫部分整體模式，它創建了對象組的樹形結構，將對象組合成樹狀
 *   結構以表示“整體-部分”的層次關係。
 *   組合模式使得用戶對單個對象和組合對象的訪問具有一致性，即：我們要對樹上的節點和葉子進行操作時，
 *   它能夠提供一致的方式，而不用考慮它是節點還是葉子
 */
// class Client {
//   static main(): void {
//     const uvs = new University("台大", "一流大學");

//     const clg_es = new College("資工系", "資工系考資料結構");
//     const clg_cs = new College("數學系", "计算机学院考408！");

//     const dpt1 = new Department("軟體工程", "軟體工程學費貴");
//     const dpt2 = new Department("网络安全", "网络安全势头很足");
//     const dpt3 = new Department("计算机科学与技术", "老牌计算机专业");
//     const dpt4 = new Department("人工智能", "数学功底要求比较高");

//     // clg_es.add(dpt1.name, dpt1);
//     // clg_es.add(dpt2.name, dpt2);
//     // clg_cs.add(dpt3.name, dpt3);
//     // clg_cs.add(dpt4.name, dpt4);

//     // uvs.add(clg_es.name, clg_es);
//     uvs.add(clg_cs.name, clg_cs);

//     uvs.print();
//     clg_cs.print();
//   }
// }

// Client.main();
