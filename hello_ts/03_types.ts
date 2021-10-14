// object表示一個 js 物件
let a3: object;

// 常用這種方式來限制物件內的屬性
// {} 用來指定物件中可以包含哪些屬性
// 語法：{屬性名：值 , 屬性名：值}
let b3: { name: string; age: number; sex?: string };
b3 = { name: "王小明", age: 99 }; // 可以不加 sex
