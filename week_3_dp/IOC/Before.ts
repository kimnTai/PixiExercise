class StudentBefore {
  pen: Pen;
  write(): void {
    console.log("學生用" + this.pen.toString());
  }
  constructor() {
    this.pen = new Pen();
  }
}
class PenBefore {
  toString(): string {
    return "筆寫字";
  }
}

const stu01 = new StudentBefore();
stu01.write(); // 學生用筆寫字

// 假設 學生的寫字的筆 不只一種
// 鋼筆、原子筆、螢光筆
// 耦合
// 不要綁的這麼緊
// 利用 Spring 幫我們把這兩個東西裝起來，就能自動寫字
// 控制反轉(IOC)、依賴注入(DI)
