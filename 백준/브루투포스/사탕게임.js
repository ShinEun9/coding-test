const fs = require("fs");
const [N, ...input] = fs.readFileSync("사탕게임.txt").toString().trim().split("\n");
const arr = input.map((item) => item.split(""));
let answer = check(arr);

let dx = [1, 0, -1, 0];
let dy = [0, -1, 0, 1];
let visited = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < 4; k++) {
      let x = i + dx[k];
      let y = j + dy[k];
      if (x < 0 || x >= N || y < 0 || y >= N || visited[x][y] === 1) continue;

      if (arr[i][j] !== arr[x][y]) {
        [arr[i][j], arr[x][y]] = [arr[x][y], arr[i][j]];

        // 몇개 연속이 가장 많은지.

        let stack = [];
        for (let l = 0; l < arr.length; l++) {
          stack.push(arr[l][j]);
        }

        let s = findMaxConsecutiveCount(arr[i]);
        let m = findMaxConsecutiveCount(stack);

        answer = Math.max(s, m, answer);
        [arr[i][j], arr[x][y]] = [arr[x][y], arr[i][j]];
      }
    }
    visited[i][j] = 1;
  }
}
console.log(answer);

function check(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let s = findMaxConsecutiveCount(arr[i]);
    answer = Math.max(answer, s);
  }

  for (let j = 0; j < arr.length; j++) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      stack.push(arr[i][j]);
    }
    let s = findMaxConsecutiveCount(stack);
    answer = Math.max(answer, s);
  }

  return answer;
}

function findMaxConsecutiveCount(arr) {
  let maxCount = 0; // 연속된 원소의 최대 개수를 저장할 변수

  let currentCount = 1; // 현재 연속된 원소의 개수를 저장할 변수

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      // 현재 원소와 이전 원소가 같으면 연속된 원소의 개수를 1 증가시킴
      currentCount++;
    } else {
      // 현재 원소와 이전 원소가 다르면
      if (currentCount > maxCount) {
        // 현재까지의 연속된 원소의 개수가 최대 개수보다 크면 최대 개수를 업데이트
        maxCount = currentCount;
      }
      // 현재 원소와 연속된 원소의 개수를 초기화
      currentCount = 1;
    }
  }

  // 배열의 마지막 원소에 대한 처리
  if (currentCount > maxCount) {
    maxCount = currentCount;
  }

  return maxCount;
}
