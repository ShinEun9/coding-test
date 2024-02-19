// 4 6
// 101111
// 101010
// 101011
// 111011
const fs = require("fs");
const n = fs.readFileSync("미로탐색.txt").toString().trim().split("\n");
const [k, m] = n[0].split(" ").map((item) => Number(item));
const graph = n.slice(1).map((item) => item.split("").map((item) => Number(item)));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = [];
queue.push([0, 0]);
while (queue.length) {
  let [x, y] = queue.shift();

  if (x === k - 1 && y === m - 1) break;

  for (let i = 0; i < 4; i++) {
    let nextX = x + dx[i];

    let nextY = y + dy[i];
    if (nextX >= 0 && nextX < k && nextY >= 0 && nextY < m) {
      if (graph[nextX][nextY] === 1) {
        graph[nextX][nextY] = graph[x][y] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }
}

console.log(graph[k - 1][m - 1]);
