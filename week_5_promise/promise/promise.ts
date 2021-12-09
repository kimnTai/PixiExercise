//接收兩個 function 成功-> then ，失敗-> catch
const promise = new Promise((resolve, reject) => {
  // 執行後即回傳，不會往下
  resolve("成功");
  reject("失敗");
});

promise
  .then((res) => {
    console.log(res); // 成功
  })
  .catch((err) => {
    console.log(err); // 失敗 - 先回傳才讀得到值
  });

function timeOut(time: number) {
  // 这个函数中就需要返回一个Promise对象
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // resolve和reject在调用的时候，是可以传递数据的，这个数据会最终被传递到成功或者失败的回调函数中
      resolve(123);
      // resolve()
      // reject()
    }, time);
  });
}

timeOut(2000).then((res) => {
  console.log(res);
});

const p1 = new Promise((resolve, reject) => {
  resolve(1);
});
const p2 = new Promise((resolve, reject) => {
  resolve(2);
});
const p3 = new Promise((resolve, reject) => {
  resolve(3);
});

Promise.race([promise, p1, p2, p3]).then((res) => {
  console.log("有一個異步率先完成了", res); //有一個異步率先完成了 成功
});

async function queryData(id: number) {
  return await p1;
}

queryData;
