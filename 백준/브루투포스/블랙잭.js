// ! DFS로 푸니 시간초과
const fs = require("fs");
const [N, input] = fs.readFileSync("블랙잭.txt").toString().trim().split("\n");
const [n, m] = N.split(" ").map((item) => Number(item));
const arr = input.split(" ").map((item) => Number(item));
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum <= m) {
        answer = Math.max(answer, sum);
      }
    }
  }
}

console.log(answer);
