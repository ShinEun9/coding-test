const fs = require("fs");

const [s, e] = fs
  .readFileSync("숨바꼭질.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((item) => Number(item));

let ch = Array.from({ length: 200000 }, () => 0);
let dis = Array.from({ length: 200000 }, () => 0);
if (s === e) {
  console.log(0);
  return;
}
