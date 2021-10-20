import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import router from "./router";

// 問題1: express 庫的類型定義文件 .d.ts 文件類型描述不準確
// 問題2: 當我使用中間件的時候，對 req 或者 res 做了修改後，實際上類型並不能改變

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = "dell";
  next();
});
app.use(router);

// 聽 http://localhost:7001
app.listen(7001, () => {
  console.log("伺服器啟動中...");
});
