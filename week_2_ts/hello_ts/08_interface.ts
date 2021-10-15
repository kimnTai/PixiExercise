// 一般都用介面表示
// interface 和 type 類似，但並不完全一致
// 介面並不會被編譯成 js 是ts 為了方便語法校驗
interface Person {
  //   readonly name: string;
  name: string;
  // ? 代表可有可無
  age?: number;
  // 代表可以接受其他屬性
  [propName: string]: any;
  say(): string;
}

// 繼承 可以繼承介面
interface Teacher_8 extends Person {
  teach(): string;
}

// 介面 也可以定義 方法
interface sayHi {
  (word: string): string;
}

type Person_1 = {
  name: string;
};
type Person_2 = string;

const getPersonName = (person: Person): void => {
  console.log(person.name);
};
const setPersonName = (person: Teacher_8, name: string): void => {
  person.name = name;
};

const boy = {
  name: "dell",
  //   age: 18,
  sex: "male",
  say() {
    return "hi";
  },
  teach() {
    return "teach";
  },
};
// 直接傳 { name: "dell",sex: "male",} 會報錯,TS會嚴格檢查,或加入  [propName: string]: any;
getPersonName(boy);
setPersonName(boy, "lee");

// 類 class 用介面去約束屬性，語法 implements
class User_8 implements Person {
  //   sex: "male";
  name = "dell";
  age?: number;
  say(): string {
    return "hel";
  }
}

// 用 sayHi 介面去約束函式
const say_8: sayHi = (word: string) => {
  return word;
};
