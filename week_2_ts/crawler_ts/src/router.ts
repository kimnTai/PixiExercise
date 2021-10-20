import { Router, Request, Response } from "express";
import Crawler from "./crawler";
import DellAnalyzer from "./dellAnalyzer";

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
   <html>
      <body>
         <form method="post" action="/getData">
            <input type="password" name="password"/>
            <button>提交</button>
         </form>
      </body>
   </html>
  `);
});

router.post("/getData", (req: RequestWithBody, res: Response) => {
  const { password } = req.body;
  if (password === "123") {
    const url = `http://www.dell-lee.com/`;
    const analyzer = DellAnalyzer.getInstance();
    new Crawler(url, analyzer);
    res.send("爬蟲 成功!");
  } else {
    res.send(`${req.teacherName}密碼錯誤`);
  }
});

export default router;
