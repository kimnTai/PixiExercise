import fs from "fs";
import path from "path";
import { Router, Request, Response, NextFunction } from "express";
import Crawler from "./utils/crawler";
import Analyzer from "./utils/analyzer";
import { getResponseData } from "./utils/util";

interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "請先登入"));
  }
};

const router = Router();
// ----- 首頁 -----
router.get("/", (req: BodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.send(`
     <html>
        <body>
        <a href='/getData' >爬取內容</a>
        <a href='/showData' >展示內容</a>
          <a href='/logout' >退出</a>
        </body>
     </html>
    `);
  } else {
    res.send(`
     <html>
        <body>
          <p>請輸入密碼</p>
           <form method="post" action="/login">
              <input type="password" name="password"/>
              <button>登入</button>
           </form>
        </body>
     </html>
    `);
  }
});
// ----- 登入 -----
router.post("/login", (req: BodyRequest, res: Response) => {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.json(getResponseData(false, "已經登入過"));
  } else {
    if (password === "123" && req.session) {
      req.session.login = true;
      res.json(getResponseData(true));
    } else {
      res.json(getResponseData(false, "登入失敗"));
    }
  }
});
// ----- 退出 -----
router.get("/logout", (req: BodyRequest, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
  }
  res.json(getResponseData(true));
});
// ----- 獲取資料 -----
router.get("/getData", checkLogin, (req: BodyRequest, res: Response) => {
  const url = `http://www.dell-lee.com/`;
  const analyzer = Analyzer.getInstance();
  new Crawler(url, analyzer);
  res.json(getResponseData(true));
});
// ----- 展示資料 -----
router.get("/showData", checkLogin, (req: BodyRequest, res: Response) => {
  try {
    const position = path.resolve(__dirname, "../data/course.json");
    const result = fs.readFileSync(position, "utf-8");
    const data: string = JSON.parse(result);
    res.json(getResponseData(data));
  } catch (e) {
    res.json(getResponseData(false, "數據不存在"));
  }
});

export default router;
