// 影片檔案(實現化角色)
interface VideoFile {
  // 解碼功能
  decode(fileName: string): void;
}
// 具體的實現化角色
class AviFile implements VideoFile {
  decode(fileName: string): void {
    console.log(`avi 影片檔案 ${fileName}`);
  }
}
class RmvbFile implements VideoFile {
  decode(fileName: string): void {
    console.log(`rmvb 影片檔案 ${fileName}`);
  }
}
// 抽象的操作系統類(抽象化角色)
abstract class OperatingSystem {
  // 宣告 videoFile 變數
  protected _videofile: VideoFile;
  constructor(videofile: VideoFile) {
    this._videofile = videofile;
  }
  abstract play(fileName: string): void;
}
// windows 操作系統(擴展抽象化角色)
class Windows extends OperatingSystem {
  constructor(videofile: VideoFile) {
    super(videofile);
  }
  play(fileName: string): void {
    this._videofile.decode(fileName);
  }
}
// mac 操作系統(擴展抽象化角色)
class Mac extends OperatingSystem {
  constructor(videofile: VideoFile) {
    super(videofile);
  }
  play(fileName: string): void {
    this._videofile.decode(fileName);
  }
}

class Client {
  static main(): void {
    // 創建 mac 系統物件
    const system: OperatingSystem = new Mac(new AviFile());
    // 使用操作系統播放影片
    system.play("猛毒２");
  }
}
Client.main();
