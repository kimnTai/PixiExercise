// 定義 callback 是一個 function(string):void
function main1(callback: (data: string) => void) {
  const data: string = "Hello";
  callback(data);
}

// 參數 a,b 都是從 main 裡面丟進去的
// main(function (a: string) {
//   console.log(a); // Hello
// });
main1((b: string) => {
  const test = b + "測試";
  console.log(b); // Hello
  console.log(test); // Hello測試
});

function callback(error: any, result?: string): void {
  if (error) {
    // 處理錯誤的流程
    console.error(error);
  } else {
    // 處理正確的流程
    console.log(result);
  }
}

function shouldBeNumber(value: any, cb: (error: any, result?: string) => void) {
  if (typeof value === "number") {
    return cb(new Error("It`s not a number!"));
  } else {
    return cb(null, "It`s a number.");
  }
}
