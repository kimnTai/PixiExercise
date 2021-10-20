"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = __importDefault(require("./router"));
// 問題1: express 庫的類型定義文件 .d.ts 文件類型描述不準確
// 問題2: 當我使用中間件的時候，對 req 或者 res 做了修改後，實際上類型並不能改變
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    req.teacherName = "dell";
    next();
});
app.use(router_1.default);
// 聽 http://localhost:7001
app.listen(7001, function () {
    console.log("伺服器啟動中...");
});
