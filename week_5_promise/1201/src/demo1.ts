// promise 承諾
// 實現承諾 (resolve)、違背承諾(reject)、承諾等待中(pending)
// 解決異步流程化的一種手段 Promise
// 異步本身就是互不相干，你做你的我做我的，但流程化就是使用異步方法的時候需要走一個先後順序
// 兩個 ajax 本身都是(異步)請求，但 B 需要等待 A 的結果再做請求(流程)
// Promise 本身是同步

// Promise 構造函數 需要 new
// Promise 參數 executor 執行器
// executor -> resolve、reject 函數
// executor new Promise 調用

// executor 是同步執行
let promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve("承諾實現");
  throw new Error("Err:承諾石沉大海");
  reject("承諾石沉大海");
});

// then 是異步調用
promise
  .then((res) => {
    console.log("Then");
  })
  .then(() => {
    console.log("Then2");
  })
  .then(() => {
    console.log("Then3");
  })
  .catch((err) => {
    console.log("捕捉", err);
  });

console.log("外面");
