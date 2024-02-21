const input = require("fs").readFileSync("뱀과사다리게임.txt").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

let board = new Array(101).fill(null).map((_, idx) => idx);

for (let i = 1; i <= n + m; i++) {
  // 사다리와 뱀.
  let [from, to] = input[i].split(" ").map(Number);
  board[from] = to;
}

sol(board);

function sol(borad) {
  let visited = new Array(101).fill(-1); // 굴린횟수.

  let q = [];
  q.push(1); // 시작칸은 1이다.
  visited[1] = 0;

  while (q.length !== 0) {
    let cur = q.shift();

    for (let dice = 1; dice <= 6; dice++) {
      let next = cur + dice; // 주사위를 굴려서 나아갈 수 있는 칸의 번호.

      if (next > 100)
        // 100을 넘어가는 일은 없다.
        continue;

      next = borad[next]; // 해당칸에 뱀이나 사다리가 있다면 이용해야만 한다.
      if (visited[next] === -1) {
        // 아직 방문한적 없는 칸.
        visited[next] = visited[cur] + 1;
        q.push(next);
      }
    }
  }
  console.log(visited[100]);
}
