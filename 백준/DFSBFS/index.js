const fs = require("fs");

const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map((item) => Number(item));
const arr = input.slice(1).map((item) => item.split(" ").map((item) => Number(item)));

const graph = Array.from({ length: n + 1 }, () => Array.from({ length: 0 }));
const visited = Array.from({ length: n + 1 }, () => 0);
for (let [x, y] of arr) {
  graph[x].push(y);
  graph[y].push(x);
}
const dfsArray = [];
graph.forEach((item) => item.sort((a, b) => a - b));
function DFS(n) {
  for (let x of graph[n]) {
    if (visited[x] === 0) {
      visited[x] = 1;
      dfsArray.push(x);
      DFS(x);
    }
  }
}
dfsArray.push(v);
visited[v] = 1;
DFS(v);

const visited2 = Array.from({ length: n + 1 }, () => 0);

const queue = [];
const bfsArray = [];
function BFS() {
  visited2[v] = 1;
  queue.push(v);
  while (queue.length) {
    let k = queue.shift();
    bfsArray.push(k);
    for (let x of graph[k]) {
      if (visited2[x] === 0) {
        visited2[x] = 1;
        queue.push(x);
      }
    }
  }
}
BFS();

console.log(dfsArray.join(" "));
console.log(bfsArray.join(" "));
