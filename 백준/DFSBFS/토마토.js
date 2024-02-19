const fs = require("fs");
const [input1, ...input2] = fs.readFileSync("토마토.txt").toString().trim().split("\n");

const [n, m] = input1.split(" ").map((item) => Number(item));

const graph = input2.map((item) => item.split(" ").map((item) => Number(item)));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const queue = [];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

let idx = 0;
while (queue.length !== idx) {
  let [i, j] = queue[idx];

  for (let k = 0; k < 4; k++) {
    const nextX = i + dx[k];
    const nextY = j + dy[k];

    if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && graph[nextX][nextY] === 0) {
      graph[nextX][nextY] = graph[i][j] + 1;
      queue.push([nextX, nextY]);
    }
  }

  idx++;
}

const index = graph.flat().indexOf(0);
if (index < 0) {
  console.log(Math.max(...graph.flat()) - 1);
} else {
  console.log(-1);
}
