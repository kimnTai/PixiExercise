import "reflect-metadata";
import { Request, Response } from "express";
import { controller, get, post } from "./decorator";
import { getResponseData } from "../utils/util";
interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

@controller
class LoginController {
  @post("/login")
  login(req: BodyRequest, res: Response) {
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
  }

  @get("/logout")
  logout(req: BodyRequest, res: Response) {
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getResponseData(true));
  }

  @get("/")
  home(req: BodyRequest, res: Response) {
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
  }
}
