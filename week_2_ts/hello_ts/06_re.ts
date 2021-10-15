let count_6: number;
count_6 = 123;

const func = (str: string) => {
  return parseInt(str, 10);
};

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

const date = new Date();

// 其他的 case
// interface Person {
//   name: "string";
// }
const rawData = '{"name":"dell"}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = "456";
