const [n, t, bd] = require("fs")
  .readFileSync("번데기.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

let arr = [];
let N = 2;
let count_0 = 0;
let count_1 = 0;
let flag = false;

const check = () => {
  if (bd === 0 && count_0 === t) flag = true;
  else if (bd === 1 && count_1 === t) flag = true;
};

while (true) {
  arr.push("0");
  count_0++;
  check();
  if (flag) break;

  arr.push("1");
  count_1++;
  check();
  if (flag) break;

  arr.push("0");
  count_0++;
  check();
  if (flag) break;

  arr.push("1");
  count_1++;
  check();
  if (flag) break;

  for (let i = 0; i < N; i++) {
    arr.push("0");
    count_0++;
    check();
    if (flag) break;
  }
  if (flag) break;
  for (let i = 0; i < N; i++) {
    arr.push("1");
    count_1++;
    check();
    if (flag) break;
  }
  if (flag) break;
  N++;
}
console.log(arr.length % n === 0 ? n - 1 : (arr.length % n) - 1);
