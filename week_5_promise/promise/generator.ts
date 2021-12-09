function fib(max: number) {
  let a = 0,
    b = 1,
    arr = [0, 1];
  while (arr.length < max) {
    [a, b] = [b, a + b];
    arr.push(b);
  }
  return arr;
}

console.log(fib(5)); // [ 0, 1, 1, 2, 3 ]

function* fib2(max: number) {
  let a = 0,
    b = 1,
    n = 0;
  while (n < max) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
  return;
}
let f = fib2(5);
console.log(f.next());

f.next(); // { value: 0, done: false }
f.next(); // { value: 1, done: false }
f.next(); // { value: 1, done: false }
f.next(); // { value: 2, done: false }
