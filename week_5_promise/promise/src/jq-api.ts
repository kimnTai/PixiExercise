import $ from "jquery";

function getData() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://hopsell-api.herokuapp.com/product/all",
      success(data) {
        resolve(data);
      },
    });
  });
}
doSomeThing();
async function doSomeThing() {
  const data: any = await getData();
  console.log(getNames(data.data));
  console.log("我看見很多商品");
}

function getNames(data: any[]) {
  return data.map((item) => {
    return item.productName;
  });
}
