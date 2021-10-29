// 重構前
class Phone_before {
  constructor(
    private _cpu: string,
    private _screen: string,
    private _memory: string,
    private _motherboard: string
  ) {}
  public get motherboard(): string {
    return this._motherboard;
  }
  public set motherboard(value: string) {
    this._motherboard = value;
  }
  public get memory(): string {
    return this._memory;
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public get screen(): string {
    return this._screen;
  }
  public set screen(value: string) {
    this._screen = value;
  }
  public get cpu(): string {
    return this._cpu;
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
}

class Client2 {
  static main(): void {
    const phone: Phone_before = new Phone_before(
      "intel",
      "三星螢幕",
      "金士頓",
      "華碩"
    );

    console.log(phone);
  }
}

Client2.main();
