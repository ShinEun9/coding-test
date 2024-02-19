const fs = require("fs");

const [N, ...input] = fs.readFileSync("덩치.txt").toString().trim().split("\n");

const arr = input.map((item) => item.split(" ").map((item) => Number(item)));
const score = Array.from({ length: N }, () => 0);

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (arr[i][0] > arr[j][0] && arr[i][1] > arr[j][1]) {
      score[j]++;
    } else if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      score[i]++;
    } else continue;
  }
}

let answer = [];
score.forEach((item) => answer.push(item + 1));

console.log(answer.join(" "));
