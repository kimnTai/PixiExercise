// 宣告一個變數 a 同時指定他的類型為 number
let a: number;

// a 的類型設置為 number , 後面使用過程中 a 的值只能是數字
a = 10;
a = 20;

// 報錯：類型 'string' 不可指派給類型 'number'。ts(2322)
// a = "hello";

// 宣告完變數直接賦值
let b: boolean = false;
b = true;

// 如果宣告賦值同時進行，ＴＳ可以自動對變數進行檢測
let c = false;

// JS 中，函數不考慮參數的類型、個數
function sum(a: number, b: number): number {
  return a + b;
}

// 參數多傳少傳都會報錯
let result = sum(123, 456);
