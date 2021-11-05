class LeaveRequest {
  // 姓名
  private _name: string;
  public get name(): string {
    return this._name;
  }
  // 請假天數
  private _num: number;
  public get num(): number {
    return this._num;
  }
  // 請假內容
  private _content: string;
  public get content(): string {
    return this._content;
  }
  constructor(name: string, num: number, content: string) {
    this._name = name;
    this._num = num;
    this._content = content;
  }
}
// 抽象處理者
abstract class Handler {
  protected static NUM_ONE: number = 1;
  protected static NUM_THREE: number = 3;
  protected static NUM_SEVEN: number = 7;
  // 該領導的處理的請求天數區間

  private numEnd: number;
  // 聲明後繼者
  private _nextHandler!: Handler;
  // 設置上級主管物件
  public set nextHandler(value: Handler) {
    this._nextHandler = value;
  }
  // 各級主管處理請求條的方法
  protected abstract handleLeave(leave: LeaveRequest): void;
  constructor(private numStart: number, numEnd: number) {
    this.numStart = numStart;
    this.numEnd = numEnd;
  }
  // 提交請求條
  submit(leave: LeaveRequest): void {
    // 該領導進行審批
    this.handleLeave(leave);
    if (this.nextHandler != null && leave.num > this.numEnd) {
      // 提交給上級領導進行審批
      this.nextHandler.submit(leave);
    } else {
      console.log("流程結束！");
    }
  }
}
// 小組長類
class GroupLeader extends Handler {
  constructor() {
    super(0, Handler.NUM_ONE);
  }
  protected handleLeave(leave: LeaveRequest): void {
    console.log(`${leave.name}請假${leave.num}天${leave.content}。`);
    console.log("小組長審批：同意");
  }
}
// 部門經理
class Manager extends Handler {
  constructor() {
    super(Handler.NUM_ONE, Handler.NUM_THREE);
  }
  protected handleLeave(leave: LeaveRequest): void {
    console.log(`${leave.name}請假${leave.num}天${leave.content}。`);
    console.log("部門經理審批：同意");
  }
}
// 總經理
class GeneralManager extends Handler {
  constructor() {
    super(Handler.NUM_THREE, Handler.NUM_SEVEN);
  }
  protected handleLeave(leave: LeaveRequest): void {
    console.log(`${leave.name}請假${leave.num}天${leave.content}。`);
    console.log("總經理審批：同意");
  }
}
class Client {
  static main(): void {
    // 創建一個請假條物件
    const leave = new LeaveRequest("小明", 4, "身體不適");
    // 創建各級領導物件
    const groupLeader = new GroupLeader();
    const manager = new Manager();
    const generalManager = new GeneralManager();
    // 設置處理者鏈
    groupLeader.nextHandler = manager;
    manager.nextHandler = generalManager;
    // 小明提交請假
    groupLeader.submit(leave);
  }
}
Client.main();
