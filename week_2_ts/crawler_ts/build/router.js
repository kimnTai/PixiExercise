"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = require("express");
var crawler_1 = __importDefault(require("./utils/crawler"));
var analyzer_1 = __importDefault(require("./utils/analyzer"));
var util_1 = require("./utils/util");
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        res.json((0, util_1.getResponseData)(null, "請先登入"));
    }
};
var router = (0, express_1.Router)();
// ----- 首頁 -----
router.get("/", function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n     <html>\n        <body>\n        <a href='/getData' >\u722C\u53D6\u5167\u5BB9</a>\n        <a href='/showData' >\u5C55\u793A\u5167\u5BB9</a>\n          <a href='/logout' >\u9000\u51FA</a>\n        </body>\n     </html>\n    ");
    }
    else {
        res.send("\n     <html>\n        <body>\n          <p>\u8ACB\u8F38\u5165\u5BC6\u78BC</p>\n           <form method=\"post\" action=\"/login\">\n              <input type=\"password\" name=\"password\"/>\n              <button>\u767B\u5165</button>\n           </form>\n        </body>\n     </html>\n    ");
    }
});
// ----- 登入 -----
router.post("/login", function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.json((0, util_1.getResponseData)(false, "已經登入過"));
    }
    else {
        if (password === "123" && req.session) {
            req.session.login = true;
            res.json((0, util_1.getResponseData)(true));
        }
        else {
            res.json((0, util_1.getResponseData)(false, "登入失敗"));
        }
    }
});
// ----- 退出 -----
router.get("/logout", function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json((0, util_1.getResponseData)(true));
});
// ----- 獲取資料 -----
router.get("/getData", checkLogin, function (req, res) {
    var url = "http://www.dell-lee.com/";
    var analyzer = analyzer_1.default.getInstance();
    new crawler_1.default(url, analyzer);
    res.json((0, util_1.getResponseData)(true));
});
// ----- 展示資料 -----
router.get("/showData", checkLogin, function (req, res) {
    try {
        var position = path_1.default.resolve(__dirname, "../data/course.json");
        var result = fs_1.default.readFileSync(position, "utf-8");
        var data = JSON.parse(result);
        res.json((0, util_1.getResponseData)(data));
    }
    catch (e) {
        res.json((0, util_1.getResponseData)(false, "數據不存在"));
    }
});
exports.default = router;
