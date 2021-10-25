import fs from "fs";
import path from "path";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { controller, use, get } from "../decorator";
import { getResponseData } from "../utils/util";
import Crawler from "../utils/crawler";
import Analyzer from "../utils/waterAnalyzer";

interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
  const isLogin = !!(req.session ? req.session.login : false);
  console.log("checkLogin middleware");
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "請先登入"));
  }
};

const test = (req: Request, res: Response, next: NextFunction): void => {
  console.log("test middleware");
  next();
};

@controller("/api")
export class CrawlerController {
  @get("/getData")
  @use(checkLogin)
  getData(req: BodyRequest, res: Response): void {
    // const url = `http://www.dell-lee.com/`;
    const url = `https://water.taiwanstat.com/`;
    const analyzer = Analyzer.getInstance();
    new Crawler(url, analyzer);
    res.json(getResponseData(true));
  }
  @get("/showData")
  @use(checkLogin)
  @use(test)
  showData(req: BodyRequest, res: Response): void {
    try {
      const position = path.resolve(__dirname, "../../data/course.json");
      const result = fs.readFileSync(position, "utf-8");
      const data: string = JSON.parse(result);
      res.json(getResponseData(data));
    } catch (e) {
      res.json(getResponseData(false, "數據不存在"));
    }
  }
}
