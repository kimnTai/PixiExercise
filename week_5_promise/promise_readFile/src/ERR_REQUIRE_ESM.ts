import fetch from "node-fetch";
// const fetch = require('node-fetch')  - 也報錯

// Error [ERR_REQUIRE_ESM]: require() of ES Module
fetch("https://hopsell-api.herokuapp.com/product/all");

// function getData() {
//   return new Promise((resolve, reject) => {
//     fetch("https://hopsell-api.herokuapp.com/product/all")
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
