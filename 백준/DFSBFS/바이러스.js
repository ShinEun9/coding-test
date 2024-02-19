const fs = require("fs");
const [n, m, ...k] = fs.readFileSync("바이러스.txt").toString().trim().split("\n");
const arr = k.map((item) => item.split(" ").map((item) => Number(item)));
const graph = Array.from({ length: Number(n) + 1 }, () => Array.from({ length: 0 }));

const visited = Array.from({ length: Number(n) + 1 }, () => 0);
for (let [x, y] of arr) {
  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach((item) => item.sort((a, b) => a - b));
function DFS(v) {
  for (let x of graph[v]) {
    if (visited[x] === 0) {
      visited[x] = 1;
      DFS(x);
    }
  }
}
visited[1] = 1;
DFS(1);
console.log(visited.reduce((a, c) => a + c, 0) - 1);
