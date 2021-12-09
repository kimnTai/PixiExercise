import fs from "fs";
import path from "path";
import { coursePath, userCoursePath, userPath } from "./type";

function readFile(path: string, isSetError?: boolean): Promise<any> {
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

// 誰先完成就返回那個 promise的結果，無論是 full filled 還是 rejected
// 測試資源或者接口響應速度
Promise.race([
  readFile(userCoursePath),
  readFile(coursePath),
  readFile(userPath, true),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
