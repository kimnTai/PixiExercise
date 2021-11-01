// // 適配者類的接口
// interface TFCard {
//   readTF(): string;
//   writeTF(msg: string): void;
// }
// class TFCardImpl implements TFCard {
//   readTF(): string {
//     const msg = "TFCard 讀取訊息 : Hello World TF";
//     return msg;
//   }
//   writeTF(msg: string): void {
//     console.log(`TFCard 寫入訊息 : ${msg}`);
//   }
// }
// // 目標接口
// interface SDCard {
//   readSD(): string;
//   writeSD(msg: string): void;
// }
// class SDCardImpl implements SDCard {
//   readSD(): string {
//     const msg = "SDCard 讀取訊息 : Hello World SD";
//     return msg;
//   }
//   writeSD(msg: string): void {
//     console.log(`SDCard 寫入訊息 : ${msg}`);
//   }
// }
// // 電腦類
// class Computer {
//   // 從 SD 卡中讀取數據
//   readSD(sdCard: SDCard) {
//     if (sdCard == null) {
//       throw new Error("sd 卡不能為空");
//     }
//     return sdCard.readSD();
//   }
// }
// // 適配器類 - 實做 SD 卡
// class SDAdapterTF extends TFCardImpl implements SDCard {
//   readSD(): string {
//     console.log("適配器讀取 TF 卡");
//     return this.readTF();
//   }
//   writeSD(msg: string): void {
//     console.log("適配器寫入 TF 卡");
//     this.writeTF(msg);
//   }
// }
// class Client {
//   static main(): void {
//     const computer = new Computer();
//     const msg = computer.readSD(new SDCardImpl());
//     console.log(msg);
//     console.log("-------------");
//     // 使用該電腦讀取 TF 中的數據
//     // 定義適配器類
//     const msgTF = computer.readSD(new SDAdapterTF());
//     console.log(msgTF);
//   }
// }
// Client.main();
