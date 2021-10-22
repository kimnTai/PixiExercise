"use strict";
// import fs from "fs";
// import path from "path";
// import { Router, Request, Response, NextFunction } from "express";
// import Crawler from "./utils/crawler";
// import Analyzer from "./utils/analyzer";
// import { getResponseData } from "./utils/util";
// interface BodyRequest extends Request {
//   body: { [key: string]: string | undefined };
// }
// const checkLogin = (req: Request, res: Response, next: NextFunction) => {
//   const isLogin = req.session ? req.session.login : false;
//   if (isLogin) {
//     next();
//   } else {
//     res.json(getResponseData(null, "請先登入"));
//   }
// };
// const router = Router();
// // ----- 獲取資料 -----
// router.get("/getData", checkLogin, (req: BodyRequest, res: Response) => {
//   const url = `http://www.dell-lee.com/`;
//   const analyzer = Analyzer.getInstance();
//   new Crawler(url, analyzer);
//   res.json(getResponseData(true));
// });
// // ----- 展示資料 -----
// router.get("/showData", checkLogin, (req: BodyRequest, res: Response) => {
//   try {
//     const position = path.resolve(__dirname, "../data/course.json");
//     const result = fs.readFileSync(position, "utf-8");
//     const data: string = JSON.parse(result);
//     res.json(getResponseData(data));
//   } catch (e) {
//     res.json(getResponseData(false, "數據不存在"));
//   }
// });
// export default router;
