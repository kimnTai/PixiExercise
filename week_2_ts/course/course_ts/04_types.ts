// type annotation 類型註解
// type inference 類型推斷，ＴＳ會自動去嘗試分析變數類行

let count_4: number;
count_4 = 123;

let countInference = 123;

// const firstNumber = 1;
// const secondNumber = 2;

function getTotal_4(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}
const total = getTotal_4(1, 2);
