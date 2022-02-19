function findJsonKey(obj: any, value: any) {
  const compare = (a: any, b: any) => a === b;
  return Object.keys(obj).find((k) => compare(obj[k], value));
}

const json = { name: "wang" };

const key = findJsonKey(json, "wang");
//console.log(key);

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function test(): Promise<void> {
  return new Promise((resolve) => {
    const arr = [1, 2, 3];
    arr.forEach(async (item, i) => {
      await sleep(i * 1000);
      console.log(item);
    });
    console.log("com");
    resolve();
  });
}
test().then(() => {
  console.log("com2");
});
