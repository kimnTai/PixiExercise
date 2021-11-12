class WdHardDisk {
  save(data: string): void {
    console.log("使用硬碟儲存數據為 : " + data);
  }
  get(): string {
    console.log("使用硬碟讀取數據");
    return "數據";
  }
}

class IntelCpu {
  run(): void {
    console.log("使用 intel 處理器");
  }
}

class KingstonMemory {
  save(): void {
    console.log("使用金士頓記憶體");
  }
}

class Computer {
  private hardDisk: WdHardDisk;
  private cpu: IntelCpu;
  private memory: KingstonMemory;
  run(): void {
    console.log("運行電腦");
    const data = this.hardDisk.get();
    console.log("從硬碟中獲取的數據是" + data);
    this.cpu.run();
    this.memory.save();
  }
  constructor() {}
}
