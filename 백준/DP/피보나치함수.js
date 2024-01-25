const fs = require("fs");

const readFileSyncAddress = "/dev/stdin";

const [n, ...input] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const arr = input.map((item) => Number(item));
let fibo_count = Array.from({ length: 40 }, () => Array.from({ length: 2 }, () => 0));
fibo_count[0][0] = 1;
fibo_count[1][1] = 1;

function calc(x) {
  if (x === 1 || x === 0) {
    return [fibo_count[x][0], fibo_count[x][1]];
  }
  if (fibo_count[x][0] > 0 && fibo_count[x][1] > 0) {
    return [fibo_count[x][0], fibo_count[x][1]];
  }

  for (let i = 2; i <= x; i++) {
    fibo_count[i][0] = fibo_count[i - 1][0] + fibo_count[i - 2][0];
    fibo_count[i][1] = fibo_count[i - 1][1] + fibo_count[i - 2][1];
  }
  return [fibo_count[x][0], fibo_count[x][1]];
}
for (let x of arr) {
  console.log(...calc(x));
}
