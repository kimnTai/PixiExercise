"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var PowerAnalyzer = /** @class */ (function () {
    function PowerAnalyzer() {
    }
    PowerAnalyzer.getInstance = function () {
        if (!PowerAnalyzer.instance) {
            PowerAnalyzer.instance = new PowerAnalyzer();
        }
        return PowerAnalyzer.instance;
    };
    // 傳入 html 並回傳 Data 物件
    PowerAnalyzer.prototype.getInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var infos = [];
        var item = $(".reservoir");
        item.map(function (index, element) {
            var name = $(element).find(".name").eq(0).text();
            var volumn = $(element).find(".volumn").eq(0).text();
            infos.push({ name: name, volumn: volumn });
        });
        return { time: new Date().getTime(), data: infos };
    };
    // 取得檔案內容方法
    PowerAnalyzer.prototype.generateJsonContent = function (courseInfo, filePath) {
        var fileContent = {};
        // 判斷該路徑文件是否存在
        if (fs_1.default.existsSync(filePath)) {
            // 先讀取已存在文件內容
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, "utf-8"));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    PowerAnalyzer.prototype.ToAnalyzer = function (html, filePath) {
        var courseInfo = this.getInfo(html); // 將 html 傳入 getInfo()
        var fileContent = this.generateJsonContent(courseInfo, filePath); // 將 data物件 傳入 generateJsonContent()
        return JSON.stringify(fileContent);
    };
    return PowerAnalyzer;
}());
exports.default = PowerAnalyzer;
