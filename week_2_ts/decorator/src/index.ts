// 修改的並不是實例上的 name,而是原型上的 name
function nameDecorator(target: any, key: string): any {
  target[key] = "lee"; // 這樣改會放在 Test.prototype, "name"
}

// name 放在實例上
class Test {
 
}

const test = new Test();
console.log((test as any).__proto__.name); // 會先找 實例上的 name
