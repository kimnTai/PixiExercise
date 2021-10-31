// // 賣火車票 - 抽象主體(Subject)類
// interface SellTickets {
//   sell(): void;
// }
// // 火車站 - 真實主題(Real Subject)類
// class TrainStation implements SellTickets {
//   sell(): void {
//     console.log("火車站賣票");
//   }
// }
// // 代售點 - 代理(Proxy)類
// class ProxyPoint implements SellTickets {
//   // 聲明火車站類物件
//   private trainstation: TrainStation = new TrainStation();
//   sell(): void {
//     console.log("代售點收取一些服務費用");
//     this.trainstation.sell();
//   }
// }
// class Client {
//   static main(): void {
//     // 創建代售點類物件
//     const proxtpoint: ProxyPoint = new ProxyPoint();
//     // 調用方法進行買票
//     proxtpoint.sell();
//   }
// }
// Client.main();
