const arr: (number | string)[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined];

// type alias 類型別名
type User = { name: string; age: number };

class Teacher {
  name: string;
  age: number;
}

const objArr: Teacher[] = [
  {
    name: "dell",
    age: 28,
  },
];

// 元祖 tuple
const teacherInfo: [string, string, number] = ["Dell", "male", 18];
// csv

const teacherList: [string, string, number][] = [
  ["dell", "male", 19],
  ["aun", "female", 26],
  ["jeny", "female", 38],
];
