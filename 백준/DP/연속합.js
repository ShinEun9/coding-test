const fs = require("fs");

// const fs = require("fs");
const readFileSyncAddress = "연속합.txt";

const [n, input] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const N = Number(n);
const arr = input
  .trim()
  .split(" ")
  .map((item) => Number(item));

const dp = Array.from({ length: N }, () => 0);

dp[0] = arr[0];
for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
}

console.log(Math.max(...dp));
