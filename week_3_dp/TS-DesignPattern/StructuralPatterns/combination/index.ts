// -------抽象根節點-------
abstract class MenuComponent {
  // 菜單組件的名稱
  protected name!: string;
  // 菜單組件的層級
  protected level!: number;
  // 添加子菜單
  add(name: string, menuComponent: MenuComponent): void {
    throw new Error("不支持操作");
  }
  // 移除子菜單
  remove(name: string): void {
    throw new Error("不支持操作");
  }
  // 獲取指定的子菜單
  getChild(index: number): MenuComponent {
    throw new Error("不支持操作");
  }
  // 獲取菜單或菜單項的名稱
  getName() {
    return this.name;
  }
  // 打印菜單名稱的方法(包含子菜單和子菜單項)
  abstract print(): void;
}
// -------菜單類：屬於樹枝節點-------
class Menu extends MenuComponent {
  // 菜單可以有多個子菜單或子菜單項
  // 核心代碼，將子節點存放於 List 中
  private menuComponentList = new Map<string, MenuComponent>();
  constructor(name: string, level: number) {
    super();
    this.name = name;
    this.level = level;
  }
  override add(name: string, menuComponent: MenuComponent): void {
    this.menuComponentList.set(name, menuComponent);
  }
  override remove(name: string): void {
    this.menuComponentList.delete(name);
  }
  override getChild(index: number): MenuComponent {
    throw new Error("待實現");
  }
  print(): void {
    let str: string = "";
    for (let i = 0; i < this.level; i++) {
      str += "--";
    }
    // 打印菜單名稱
    console.log(str + this.name);
    // 打印子菜單或子菜單項名稱
    this.menuComponentList.forEach((item) => {
      item.print();
    });
  }
}
// -------菜單項：屬於葉子節點-------
class MenuItem extends MenuComponent {
  constructor(name: string, level: number) {
    super();
    this.name = name;
    this.level = level;
  }

  print(): void {
    let str: string = "";
    for (let i = 0; i < this.level; i++) {
      str += "--";
    }
    // 打印菜單項名稱
    console.log(str + this.name);
  }
}

class Client {
  static main(): void {
    // 創建菜單樹
    const menu_1 = new Menu("菜單管理", 2);
    menu_1.add("頁面訪問", new MenuItem("頁面訪問", 3));
    menu_1.add("展開菜單", new MenuItem("展開菜單", 3));
    menu_1.add("編輯菜單", new MenuItem("編輯菜單", 3));
    menu_1.add("刪除菜單", new MenuItem("刪除菜單", 3));
    menu_1.add("新增菜單", new MenuItem("新增菜單", 3));
    const menu_2 = new Menu("權限管理", 2);
    menu_2.add("頁面訪問", new MenuItem("頁面訪問", 3));
    menu_2.add("提交保存", new MenuItem("提交保存", 3));
    const menu_3 = new Menu("角色管理", 2);
    menu_3.add("頁面訪問", new MenuItem("頁面訪問", 3));
    menu_3.add("新增角色", new MenuItem("新增角色", 3));
    menu_3.add("修改角色", new MenuItem("修改角色", 3));
    // 創建一級菜單
    const component = new Menu("系統管理", 1);
    component.add("菜單管理", menu_1);
    component.add("權限管理", menu_2);
    component.add("角色管理", menu_3);
    // 打印菜單名稱(如果有子菜單一塊打印)
    component.print();
  }
}

Client.main();
