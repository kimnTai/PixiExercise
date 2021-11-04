class Light {
  on(): void {
    console.log("打開電燈．．．");
  }
  off(): void {
    console.log("關閉電燈．．．");
  }
}
class TV {
  on(): void {
    console.log("打開電視機．．．");
  }
  off(): void {
    console.log("關閉電視機．．．");
  }
}
class AirCondition {
  on(): void {
    console.log("打開空調．．．");
  }
  off(): void {
    console.log("關閉空調．．．");
  }
}
// 外觀類，用戶主要和該類物件進行交互
class SmartAppliancesFacade {
  // 聚合電燈、電視機、空調物件
  private light: Light;
  private tv: TV;
  private airCondition: AirCondition;
  constructor() {
    this.light = new Light();
    this.tv = new TV();
    this.airCondition = new AirCondition();
  }
  // 通過語音控制
  say(message: string): void {
    if (message.includes("打開")) {
      this.on();
    } else if (message.includes("關閉")) {
      this.off();
    } else {
      console.log("我聽不懂");
    }
  }
  // 一鍵打開功能
  private on(): void {
    this.light.on();
    this.tv.on();
    this.airCondition.on();
  }
  // 一鍵關閉功能
  private off(): void {
    this.light.off();
    this.tv.off();
    this.airCondition.off();
  }
}

// class Client {
//   static main(): void {
//     const facade = new SmartAppliancesFacade();
//     facade.say("打開家電");
//     console.log("-------------");
//     facade.say("關閉家電");
//     facade.say("測試");
//   }
// }
// Client.main();
