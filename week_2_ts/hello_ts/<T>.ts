// 需求 若參數 first 為 string 則 second 也必須是 string
// 若參數 first 為 number 則 second 也必須是 number

// 泛型 generic 泛指的類型
// join 函式接收 T (任意) 類型的參數，那 first second 都必須要是 T 類型
function otherJoin<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

function map<T>(params: Array<T>) {
  return params;
}

otherJoin<string, number>("1", 1);
map<string>(["test"]);
