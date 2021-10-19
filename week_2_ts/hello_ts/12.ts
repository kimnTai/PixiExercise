interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  bark: () => {};
}
// 類型斷言的方式
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}
// in 語法來做類型保護
function trainAnimalSecond(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}
// typeof 語法來做類型保護
function add(first: string | string, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

// 使用 instanceof 語法來做類型保護 (只能用class)
class NumberObj {
  count!: number;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
