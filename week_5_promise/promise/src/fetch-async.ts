async function getData(): Promise<any> {
  try {
    const res = await fetch("https://hopsell-api");
    const res_1 = await res.json();
    return res_1;
  } catch (err) {
    return err;
  }
}

// async 的意思是當前這個異步與同一作用域下的程序是異步的關係
async function logData(): Promise<void> {
  const p1 = await getData();
}
logData();
console.log("外面");

// await 是一個操作符
// 等待一個 Promise 物件產出結果的操作手段
// 功能是暫停 async 函數的執行，等待 Promise 處理後的結果
// 假如 Promise 處理的結果是 reject，會拋出異常
// async 函數式通過一個隱式的 Promise 返回 pending 狀態
// 處理 Promise 結果使用 async await
