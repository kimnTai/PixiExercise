async function foo() {
  await somePromise();
  return "success!";
}

function somePromise() {
  setTimeout(() => {
    console.log("get data");
  }, 5000);
}

foo().then((res) => console.log(res)); // ‘success!’
