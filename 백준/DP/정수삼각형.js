function solution(triangle) {
  var answer = 0;
  let n = triangle.length;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  dp[0][0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][0] + triangle[i][j];
      } else if (j === triangle.length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
    console.log(dp[i]);
  }
  answer = Math.max(...dp[n - 1]);
  return answer;
}

// console.log(solution([[1], [2, 3]]));

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
