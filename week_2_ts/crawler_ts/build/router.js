"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawler_1 = __importDefault(require("./crawler"));
var dellAnalyzer_1 = __importDefault(require("./dellAnalyzer"));
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.send("\n   <html>\n      <body>\n         <form method=\"post\" action=\"/getData\">\n            <input type=\"password\" name=\"password\"/>\n            <button>\u63D0\u4EA4</button>\n         </form>\n      </body>\n   </html>\n  ");
});
router.post("/getData", function (req, res) {
    var password = req.body.password;
    if (password === "123") {
        var url = "http://www.dell-lee.com/";
        var analyzer = dellAnalyzer_1.default.getInstance();
        new crawler_1.default(url, analyzer);
        res.send("爬蟲 成功!");
    }
    else {
        res.send(req.teacherName + "\u5BC6\u78BC\u932F\u8AA4");
    }
});
exports.default = router;
