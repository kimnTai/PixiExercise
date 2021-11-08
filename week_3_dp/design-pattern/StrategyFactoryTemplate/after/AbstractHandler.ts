// import { Factory } from "./Factory";

// export abstract class Handler {
//   logicA(name: string): void {
//     throw new Error("錯誤");
//   }
//   logicB(name: string): string {
//     throw new Error("錯誤");
//   }
// }
// // 策略模式
// export class PersonA extends Handler {
//   logic(name: string): void {
//     // 業務邏輯Ａ
//     console.log("張三完成任務");
//   }
//   // spring 透過這個方法將 class 註冊到 map
//   afterPropertiesSet(): void {
//     Factory.register("張三", this);
//   }
// }
