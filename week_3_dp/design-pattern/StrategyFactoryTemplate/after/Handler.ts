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
  afterPropertiesSet(): void {
    Factory.register("張三", this);
  }
}
