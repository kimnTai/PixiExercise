class ClientBefore {
  static main(): void {
    const name = "張三";
    if (name === "張三") {
      // 業務邏輯Ａ
      console.log("張三完成任務");
    } else if (name === "李四") {
      // 業務邏輯Ｂ
      console.log("李四完成任務");
    } else if (name === "王五") {
      // 業務邏輯Ｃ
      console.log("王五完成任務");
    } else if (name === "越六") {
      // 業務邏輯Ｄ
      console.log("越六完成任務");
    } else if (name === "田七") {
      // 業務邏輯Ｅ
      console.log("田七完成任務");
    } else if (name === "坑八") {
      // 業務邏輯Ｆ
      console.log("坑八完成任務");
    }
  }
}
