async function main() {
  console.log("開始 main"); // STEP 1-1
  let val = await get(); // STEP 1-2

  console.log("等待 get 後獲得值", val); // STEP 2-1
  let result = await process(val); // STEP 2-2

  console.log("結果", result); // STEP 3-1
  return result;
}

function get() {
  console.log("我在擺脫承諾"); //  STEP 1-3
  return new Promise((resolve, reject) => {
    //  STEP 1-4
    setTimeout(() => resolve("A"), 1000); //  STEP 1-5 To STEP 2 after 1 sec
  });
}

function process(value: unknown) {
  console.log("我在處理 process ,", value); //  STEP 2-3
  return new Promise((resolve, reject) => {
    //  STEP 2-4
    setTimeout(() => resolve(`${value}-秘密`), 1000); // STEP 2-5 To STEP 3 after 1 sec
  });
}

// async function 本身會回傳 Promise，
// 因此 async function 之後也可以用 `.then()` 串起來
main().then((value) => {
  console.log(value);
});
/**
 * 開始 main
 * 我在擺脫承諾
 * 等待後獲得價值 秘密
 * 我在處理, 秘密
 * 結果 秘密-秘密
 * 秘密-秘密
 */
