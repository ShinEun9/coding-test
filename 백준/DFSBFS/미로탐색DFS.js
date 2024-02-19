const fs = require("fs");
const n = fs.readFileSync("미로탐색.txt").toString().trim().split("\n");
const [k, m] = n[0].split(" ").map((item) => Number(item));
const graph = n.slice(1).map((item) => item.split("").map((item) => Number(item)));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = [];
queue.push([0, 0]);

let answer = Number.MAX_SAFE_INTEGER;

function DFS(x, y, sum) {
  if (sum >= answer) return;
  if (x === k - 1 && y === m - 1) {
    answer = sum;
    return;
  }

  for (let i = 0; i < 4; i++) {
    let nextX = x + dx[i];
    let nextY = y + dy[i];
    if (nextX >= 0 && nextX < k && nextY >= 0 && nextY < m && graph[nextX][nextY] === 1) {
      graph[nextX][nextY] = 0;
      DFS(nextX, nextY, sum + 1);
      graph[nextX][nextY] = 1;
    }
  }
}

DFS(0, 0, 1);
console.log(answer);
