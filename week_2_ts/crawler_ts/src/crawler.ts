import fs from "fs";
import path from "path";
import superagent from "superagent";
//import DellAnalyzer from "./dellAnalyzer.ts";
import otherAnalyzer from "./otherAnalyzer";

export interface Analyzer {
  ToAnalyzer: (html: string, filePath: string) => string;
}

// 負責單獨爬取內容
class Crawler {
  private filePath = path.resolve(__dirname, "../data/course.json");
  // 獲取 html 方法
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  // 寫入檔案方法
  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  // 將邏輯過程拆分出來 (controller ?) -> 避免耦合
  async initSpiderProcess() {
    const html = await this.getRawHtml();
    // 將分析交給 analyzer (class)
    const fileContent = this.analyzer.ToAnalyzer(html, this.filePath); // analyzer 必須回傳字串
    this.writeFile(fileContent); // 將 courseInfo 傳入 writeFile()
    console.log("已完成");
  }
  // 構造器
  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

const url = `http://www.dell-lee.com/`;
// 組合設計模式
// 思考 － 如何將 Analyzer 變成單例模式
// 窩不知道
const analyzer = new otherAnalyzer();
new Crawler(url, analyzer);
