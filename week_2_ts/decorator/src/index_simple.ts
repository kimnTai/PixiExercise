// 類的裝飾器
// 裝飾器本身是一個函數
// 裝飾器接收的參數是構造函數
// 裝飾器透過 @ 符號來使用

// 工廠類型包裝
// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log("testDecorator");
//       };
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }

// @testDecorator(false)
// class Test {}

// const test = new Test();
// (test as any).getName();

// // 類被定義的時候執行裝飾
