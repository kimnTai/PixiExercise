// 類的裝飾器
// 裝飾器本身是一個函數
// 裝飾器接收的參數是構造函數
// 裝飾器透過 @ 符號來使用

// 這是一個函數，這個函數接收很多參數，參數的每一項都是 any 類型
// new 代表這是構造函數
// function testDecorator() {
//   return function <T extends new (...args: any[]) => any>(constructor: T) {
//     return class extends constructor {
//       name = "lee";
//       getName() {
//         return this.name;
//       }
//     };
//   };
// }

// const Test = testDecorator()(
//   class {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
// );

// const test = new Test("dell");
// console.log(test.getName());
