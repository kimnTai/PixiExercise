// private , protected , public 訪問類型
// public 允許在類的內外被調用
// private 允許在類內被使用
// protected 允許在類內及繼承的子類中使用
class Person_9 {
  protected name!: string;
  public getName() {
    this.name = "hi";
    console.log("hi");
  }
}
const peraon_91 = new Person_9();
// peraon_91.name = "dell";
// console.log(peraon_91.name);

// 繼承
class Teacher_9 extends Person_9 {
  public sayBye() {
    this.name;
  }
  getTeacherName() {
    return "繼承 extends ";
  }
  getName() {
    return super.getName() + "調用父類方法 super ";
  }
}

// const peraon_9 = new Teacher_9();
// console.log(peraon_9.getName());
// console.log(peraon_9.getTeacherName());

// constructor
class People {
  // 傳統寫法
  //   public name!: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }

  //  簡化寫法
  constructor(public name: string) {}
}
// const people = new People("dell");
// console.log(people.name);

class TeacherPeople extends People {
  constructor(public age: number) {
    super("Dell");
  }
}

const teacherPeople = new TeacherPeople(28);

console.log(teacherPeople.age);
console.log(teacherPeople.name);

