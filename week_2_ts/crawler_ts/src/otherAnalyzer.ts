import { Analyzer } from "./crawler";

export default class otherAnalyzer implements Analyzer {
  public ToAnalyzer(html: string, filePath: string) {
    return html;
  }
}
