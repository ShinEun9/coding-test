const fs = require("fs");
const [n, ...input] = fs.readFileSync("단지번호붙이기.txt").toString().split("\n");

const graph = input.map((item) => item.split("").map((item) => Number(item)));

let queue = [];
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let N = Number(n);
let answer = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let sum = 0;
    if (graph[i][j] === 1) {
      graph[i][j] = 0;
      queue.push([i, j]);
      while (queue.length) {
        let [x, y] = queue.shift();
        sum++;

        for (let i = 0; i < 4; i++) {
          const nextX = x + dx[i];
          const nextY = y + dy[i];

          if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N && graph[nextX][nextY] === 1) {
            graph[nextX][nextY] = 0;
            queue.push([nextX, nextY]);
          }
        }
      }
    }
    if (sum > 0) {
      answer.push(sum);
    }
  }
}

console.log(answer.length);
answer.sort((a, b) => a - b);
for (x of answer) {
  console.log(x);
}
