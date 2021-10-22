interface Item {
  name: string;
}
// 需求：希望Ｔ只能是 string | number
class DataManager<T extends string | number> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
const data = new DataManager<string>([]);

// 如何使用泛型做 function 類型註解
function hello<T>(params: T) {
  return params;
}

const funct: <T>(param: T) => T = hello;
