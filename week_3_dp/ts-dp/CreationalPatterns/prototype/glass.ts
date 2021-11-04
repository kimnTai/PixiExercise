class Glass {
  color: string;
  length: number;
  constructor(color: string, length: number) {
    this.color = color;
    this.length = length;
  }
}

class Sheep {
  age: number;
  hair: string;
  glass: Glass;
  constructor(age: number = 0, hair: string = "", glass: Glass) {
    this.age = age;
    this.hair = hair;
    this.glass = glass;
  }
  canCopy(): void {
    console.log("可以複製");
  }
  canNotCopy(): void {
    console.log("不能複製");
  }

  shallowCopy(): Sheep {
    return new Sheep(this.age, this.hair, this.glass);
  }
  deepClone(): Sheep {
    const serializeStr = JSON.stringify(this);
    const cloneObj = JSON.parse(serializeStr) as Sheep;
    cloneObj.canCopy = this.canCopy;
    return cloneObj;
  }
}

class test {
  static mainShallow(): void {
    const glass = new Glass("灰", 20);
    const sheep = new Sheep(3, "", glass);
    console.log(`原型： ${JSON.stringify(sheep)}`); // 原型： {"age":3,"hair":"","glass":{"color":"灰","length":20}}

    const sheep_1 = sheep.shallowCopy();
    const sheep_2 = sheep.shallowCopy();
    const sheep_3 = sheep.shallowCopy();
    console.log(`sheep_1 : ${JSON.stringify(sheep)}\n`); // sheep_1 : {"age":3,"hair":"","glass":{"color":"灰","length":20}}
    sheep.age = 5;
    sheep.glass.color = "白";
    console.log(`原型：${JSON.stringify(sheep)}`); // 原型：{"age":5,"hair":"","glass":{"color":"白","length":20}}
    console.log(`sheep_1：${JSON.stringify(sheep_1)}`); // sheep_1：{"age":3,"hair":"","glass":{"color":"白","length":20}}
    console.log(`sheep_2：${JSON.stringify(sheep_2)}`); // sheep_2：{"age":3,"hair":"","glass":{"color":"白","length":20}}

    const sheep2_2 = sheep_2;
    console.log(`sheep == sheep3 : ${sheep == sheep_3}`); // sheep == sheep3 : false
    console.log(`sheep2_2 == sheep_2: ${sheep2_2 == sheep_2}`); // sheep2_2 == sheep_2: true
  }

  static mainDeep(): void {
    const glass = new Glass("灰色", 20);
    const sheep = new Sheep(3, undefined, glass);
    console.log(`原型： : ${JSON.stringify(sheep)}`);

    const sheep_1 = sheep.deepClone();
    const sheep_2 = sheep.deepClone();
    const sheep_3 = sheep.deepClone();
    console.log(`sheep_1 : ${JSON.stringify(sheep_1)}\n`);

    sheep.age = 5;
    sheep.glass.color = "白色";
    console.log(`原型：: ${JSON.stringify(sheep)}`); // 原型：: {"age":5,"hair":"","glass":{"color":"白色","length":20}}
    console.log(`sheep_2: ${JSON.stringify(sheep_2)}\n`); // sheep_2: {"age":3,"hair":"","glass":{"color":"灰色","length":20}}
    sheep_2.canCopy(); // 可以複製
    console.log(`${sheep_2.canNotCopy}\n`); // undefined

    const sheep2_2 = sheep_2;
    console.log(`sheep == sheep_3: ${sheep == sheep_3}`);
    console.log(`sheep2_2 == sheep_2: ${sheep2_2 == sheep_2}`);
  }
}

test.mainDeep();
