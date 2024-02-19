const fs = require("fs");

const N = fs.readFileSync("한수.txt").toString().trim().split("\n");
const n = Number(N);
let answer = 0;
for (let i = 1; i <= n; i++) {
  let arr = String(i)
    .split("")
    .map((item) => Number(item));
  let diff = arr[0] - arr[1];
  let flag = true;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== diff) {
      flag = false;
      break;
    }
  }
  if (flag) answer++;
}

console.log(answer);
