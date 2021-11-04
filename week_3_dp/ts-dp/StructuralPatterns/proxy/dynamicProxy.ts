// 賣火車票 - 抽象主體(Subject)類
interface SellTickets {
  sell(): void;
}
// 火車站 - 真實主題(Real Subject)類
class TrainStation implements SellTickets {
  sell(): void {
    console.log("火車站賣票");
  }
}
// 獲取代理物件工廠類
// 代理類也實現了對應的接口
class ProxyFactory {
  // 聲明目標物件
  private station: any = new TrainStation();
  constructor(target: TrainStation) {
    this.station = target;
  }

  getProxyObject(): TrainStation {
    return new Proxy(this.station, {
      get: (target, propKey) => {
        console.log("動態代理的保存之前處理...");
        return target[propKey];
      },
    });
  }
}

// class Client {
//   static main(): void {
//     const instance = new ProxyFactory(new TrainStation()).getProxyObject();
//     instance.sell();
//   }
// }

// Client.main();
