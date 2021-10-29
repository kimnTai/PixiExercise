// readonly
class Person_11 {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person11 = new Person_11("Dell");
console.log(person11.name);
// person11.name = "hello";
console.log(person11.name);

// 很多的類如果有通用性，抽象類就是把這些東西定義出來，進行封裝
// 例：每個圖形都要有個 getArea 方法
// 定義圖形通用抽象類
abstract class Geom {
  width!: number;
  getType() {
    return "Geom";
  }
  abstract getArea(): number;
}
// 抽象類只能被繼承，抽象方法必須在子類中被實現
class Circle extends Geom {
  getArea() {
    return 123;
  }
}
class Square {}
class Triangle {}
// --------------------------

// 二次封裝介面 人物
interface Person {
  name: string;
}
// 定義介面
interface Teacher extends Person {
  teachingAge: number;
}
interface Student extends Person {
  age: number;
}
interface Driver extends Person {
  age: number;
}
// const teacher = {
//   name: "dell",
//   teachingAge: 3,
// };
const student = {
  name: "lee",
  age: 18,
};
// 介面封裝不夠，職業太多
const getUserInfo = (user: Person) => {
  console.log(user.name);
};
getUserInfo(teacher);
// getUserInfo(student);
