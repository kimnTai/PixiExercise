interface Prototype {
  clone(): Prototype;
}

class Dog implements Prototype {
  clone(): Prototype {
    return Object.create(this);
  }
  private name: string;
  private birthYear: number;
  private sex: string;
  public presentYear: number;
  constructor() {
    this.name = "david";
    this.birthYear = 2015;
    this.sex = "man";
    this.presentYear = 2018;
  }
  public getDescription(): string {
    return `狗叫${this.name},性別${this.sex},${this.presentYear}年${
      this.presentYear - this.birthYear
    }`;
  }
}

// 使用
const dog = new Dog();

console.log(dog.getDescription());
dog.presentYear = 2020;
const dog1 = Object.create(dog);
console.log(dog1.getDescription());
