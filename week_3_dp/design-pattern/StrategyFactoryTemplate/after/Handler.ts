import { Factory } from "./Factory";

export interface Handler {
  logic(name: string): void;
}
// 策略模式
export class PersonA implements Handler {
  logic(name: string): void {
    // 業務邏輯Ａ
    console.log("張三完成任務");
  }
  // spring 透過這個方法將 class 註冊到 map
  setToFactory(): void {
    Factory.register("張三", this);
  }
}
export class PersonB implements Handler {
  logic(name: string): void {
    console.log("李四完成任務");
  }
  setToFactory(): void {
    Factory.register("李四", this);
  }
}
export class PersonC implements Handler {
  logic(name: string): void {
    console.log("王五完成任務");
  }
  setToFactory(): void {
    Factory.register("王五", this);
  }
}
