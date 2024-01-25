const fs = require("fs");

const readFileSyncAddress = "부녀회장이될거야.txt";

const [n, ...input] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const arr = input.map((item) => Number(item));
// console.log(arr);
function solve(x, y) {
  let data = Array.from({ length: x + 1 }, () => Array.from({ length: y + 1 }, () => 0));

  for (let i = 0; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      if (i === 0) {
        data[0][j] = j;
        continue;
      }

      data[i][j] += data[i][j - 1] + data[i - 1][j];
    }
  }

  return data[x][y];
}
for (let i = 0; i < Number(n); i++) {
  console.log(solve(arr[2 * i], arr[2 * i + 1]));
}
