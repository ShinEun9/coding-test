// const fs = require("fs");

// const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [x, y] = n.split(" ").map((item) => Number(item));

// let arr = input.map((item) => item.split(""));
// let graph = Array.from({ length: x }, () => Array.from({ length: y }, () => 0));
// let answer = Number.MAX_SAFE_INTEGER;
// const color = { W: "B", B: "W" };

// solve();

// arr = input.map((item) => item.split(""));
// graph = Array.from({ length: x }, () => Array.from({ length: y }, () => 0));
// arr[0][0] = color[arr[0][0]];
// graph[0][0] = 1;
// solve();

// function solve() {
//   for (let i = 0; i < x; i++) {
//     if (i + 1 < x && arr[i][0] === arr[i + 1][0]) {
//       arr[i + 1][0] = color[arr[i][0]];
//       graph[i + 1][0] = 1;
//     }
//     for (let j = 0; j < y - 1; j++) {
//       if (arr[i][j] === arr[i][j + 1]) {
//         arr[i][j + 1] = color[arr[i][j]];
//         graph[i][j + 1] = 1;
//       }
//     }
//   }

//   for (let i = 0; i <= x - 8; i++) {
//     for (let j = 0; j <= y - 8; j++) {
//       let sum = 0;
//       for (let k = i; k < i + 8; k++) {
//         for (let m = j; m < j + 8; m++) {
//           sum += graph[k][m];
//         }
//       }
//       if (sum < answer) {
//         answer = sum;
//       }
//     }
//   }
// }

// console.log(answer);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [size, ...arr] = input;
let [row, col] = size.split(" ");
arr = arr.map((i) => i.split(""));
const answer = [];

//하얀색이 먼저 시작하는 판
const white = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];

//검은색이 먼저 시작하는 판
const black = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];

//하얀색이 먼저 시작하는 판과 비교하여 다르다면 count
function whiteFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== white[i][j]) count++;
    }
  }
  return count;
}

//검은색이 먼저 시작하는 판과 비교하여 다르다면 count
function blackFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== black[i][j]) count++;
    }
  }
  return count;
}

//전체 판을 움직이는 형태로 작성했기에, -7을 해줌으로써 전체 판을 벗어나지 않게 해준다.
for (let j = 0; j < row - 7; j++) {
  for (let k = 0; k < col - 7; k++) {
    answer.push(whiteFirst(j, k));
    answer.push(blackFirst(j, k));
  }
}
console.log(Math.min(...answer));
