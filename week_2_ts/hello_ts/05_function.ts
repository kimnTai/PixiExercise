// function add(first: number, second: number): number {
//   return first + second;
// }

// const total_5 = add(1, 2);

// function sayHello(): void {
//   console.log("hello");
//   return;
// }

// function errorEmitter(): never {
//   throw new Error();
//   console.log(123);
// }

// 解構語法 ？
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total_5 = add({ first: 1, second: 2 });

function getNumber({ first }: { first: number }) {
  return first;
}

const count_5 = getNumber({ first: 1 });
