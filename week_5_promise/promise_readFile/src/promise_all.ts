import fs from "fs";
import { coursePath, userCoursePath, userPath } from "./type";

function readFile(path: string, isSetError?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err || isSetError) {
        reject("承諾石沈大海了");
      }
      const resData = JSON.parse(data);
      resolve(resData);
    });
  });
}

readFile(userPath)
  .then((res) => {
    console.log(res);

    // return new Promise((resolve,reject)=>{ resolve("成功") })
    return Promise.resolve("成功");
  })
  // 返回一個狀態
  .then((res) => {
    console.log(res);
  });

// 需求：合併三個文件內部的內容為一個陣列，並且按照順序排列，如果一個讀取失敗，讓這個數據集合返回一個 rejected
// iterable 類型的數據 -> Array Set Map

Promise.all([
  readFile(userCoursePath),
  readFile(coursePath, true),
  readFile(userPath),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 用多個異步任務併發運行，他的結果創建承諾之後使用，等待所有任務的結果完成
// iterable 內部元素傳遞的是 promise 物件集合
// 如果不是 promise，直接 resolve Promise.resolve(0||'123'||true)
// iterable 內部沒有元素，返回空陣列
// 有一個 promise 是 rejected 實例回調 rejected
// 失敗的原因：是第一個產生的 Error
