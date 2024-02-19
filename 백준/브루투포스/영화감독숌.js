// const fs = require("fs");

// const N = fs.readFileSync("덩치.txt").toString().trim().split("\n");
// console.log(N);
const N = 10000;
let i = 1;
let n = 0;
while (true) {
  if (String(i).includes("666")) {
    n++;
  }
  if (n === N) break;
  i++;
}

console.log(i);
