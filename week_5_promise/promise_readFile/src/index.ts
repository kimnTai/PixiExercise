import { MyPromise } from "./MyPromise";

let myPromise = new MyPromise((resolve, reject) => {
  resolve("test");
  reject("Err");
});

myPromise.then(
  (value: any) => {
    console.log("已完成 : " + value);
  },
  (reason: any) => {
    console.log("被拒絕 : " + reason);
  }
);
