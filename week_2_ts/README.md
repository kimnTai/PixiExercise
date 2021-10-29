## TypeScript 前後端開發
![](https://i.imgur.com/wNT831c.png)
#### 後端 爬蟲
- 運用 **組合模式** 將功能拆為爬取( crawler.ts ) 與分析( dellAnalyzer.ts ) 兩類
- 保持方法 單一職則原則
- 運用 **單例模式** 要求 Analyzer 不能被外部實例化
- 使用 Express 框架撰寫 API
- 功能模組化，並撰寫 controller
- 爬取 [台灣水庫即時水情](https://water.taiwanstat.com/) 
#### 前端 React
- 使用 React 開發
- 整合 ECharts 
- 定義前後端接口文檔 responseResult.d.ts
#### 使用說明
- 安裝 `npm install`
- 後端執行 `npm run start`
- 前端執行 `npm start`
- 輸入密碼 123
- 即可產生 course.json 於 data 資料夾中
- 並觀看即時資料

