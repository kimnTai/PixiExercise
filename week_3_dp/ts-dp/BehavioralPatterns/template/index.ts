// 抽象類(定義模板方法和基本方法)
abstract class ABstractClass {
  pourOil(): void {
    console.log("倒油");
  }
  heatOil(): void {
    console.log("熱油");
  }
  // 倒蔬菜是不一樣的(一個下包菜，一個下菜心)
  abstract pourVegetable(): void;
  // 第四步：倒調味料是不一樣的
  abstract pourSauce(): void;
  // 第五步：翻炒是一樣的，所以直接實現
  fry(): void {
    console.log("炒啊炒啊炒啊炒啊");
  }
  // 模板方法定義
  cookProcess(): void {
    this.pourOil();
    this.heatOil();
    this.pourVegetable();
    this.pourSauce();
    this.fry();
  }
}
// 具體子類
class ConcreteClass_Cabbage extends ABstractClass {
  pourVegetable(): void {
    console.log("下鍋的蔬菜是包菜");
  }
  pourSauce(): void {
    console.log("下鍋的醬料是辣椒");
  }
}
class ConcreteClass_Chon extends ABstractClass {
  pourVegetable(): void {
    console.log("下鍋的蔬菜是菜心");
  }
  pourSauce(): void {
    console.log("下鍋的醬料是蒜蓉");
  }
}
class Client {
  static main(): void {
    // 炒包菜
    // 創建物件
    const cabbage = new ConcreteClass_Cabbage();
    // 調用炒菜的功能
    cabbage.cookProcess();
  }
}
Client.main();
