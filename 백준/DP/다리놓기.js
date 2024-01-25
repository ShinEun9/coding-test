const fs = require("fs");

const [N, ...input] = fs.readFileSync("다리놓기.txt").toString().trim().split("\n");
const arr = input.map((item) => item.split(" ").map((item) => Number(item)));

const dp = Array.from({ length: 31 }, () => Array.from({ length: 31 }, () => 0));

const solve = (i, j) => {
  if (dp[i][j] >= 1) return;
  if (i === j) dp[i][j] = 1;
  else if (i === 1) {
    dp[i][j] = j;
  } else {
    for (let k = j - 1; k >= 1; k--) {
      dp[i][j] += dp[i - 1][k];
    }
  }
};

for (let [n, m] of arr) {
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= m; j++) {
      solve(i, j);
    }
  }
  console.log(dp[n][m]);
}
