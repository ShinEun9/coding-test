// ! 백준 11724번 연결요소의 개수구하기
// function solution(n, m, arr) {
//     const graph = Array.from({ length: n + 1 }, () => Array.from({ length: 0 }))
//     for (let [i, j] of arr) {
//         graph[i].push(j)
//     }

//     const ch = Array(n + 1).fill(0);
//     let queue = []
//     let answer = 0

//     for (let i = 1; i <= n; i++) {
//         if (ch[i] === 0) {
//             queue.push(i);

//             answer++;
//             while (queue.length) {
//                 let v = queue.shift();
//                 ch[v] = 1;
//                 for (let x of graph[v]) {
//                     if (ch[x] === 0) {
//                         queue.push(x)
//                     }
//                 }
//             }
//         }
//     }
//     return answer;
// }
// let arr = [[1, 2], [2, 5], [5, 1], [3, 4], [4, 6]]
// console.log(solution(6, 5, arr))
// let arr2 = [[1, 2], [2, 5], [3, 4], [4, 6], [5, 4], [2, 4], [2, 3]]
// console.log(solution(6, 8, arr2))

// ! 백준 1260번 DFS와 BFS프로그램
// function solution(n, m, s, arr) {
//   const graph = Array.from({ length: n + 1 }, () => Array.from({ length: 0 }));
//   const ch = Array.from({ length: n + 1 }, () => 0);
//   for (let [i, j] of arr) {
//     graph[i].push(j);
//     graph[j].push(i);
//   }
//   let answer = "";
//   function DFS(L) {
//     for (let x of graph[L]) {
//       if (ch[x] === 0) {
//         ch[x] = 1;
//         answer += `${x} `;
//         DFS(x);
//       }
//     }
//   }

//   ch[s] = 1;
//   answer += `${s} `;
//   DFS(s);
//   return answer;
// }

// function solution(n, m, s, arr) {
//   const graph = Array.from({ length: n + 1 }, () => Array.from({ length: 0 }));
//   const ch = Array.from({ length: n + 1 }, () => 0);
//   for (let [i, j] of arr) {
//     graph[i].push(j);
//     graph[j].push(i);
//   }
//   let answer = "";
//   const queue = [];

//   ch[s] = 1;
//   queue.push(s);

//   while (queue.length) {
//     let v = queue.shift();
//     answer += `${v} `;

//     for (let x of graph[v]) {
//       if (ch[x] === 0) {
//         ch[x] = 1;
//         queue.push(x);
//       }
//     }
//   }
//   return answer;
// }

// let arr = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 4],
//   [3, 4],
// ];
// console.log(solution(4, 5, 1, arr));

// ! 백준 2178번 미로탐색하기
// * BFS 풀이
// function solution(n, m, arr) {
//   let dx = [1, -1, 0, 0];
//   let dy = [0, 0, 1, -1];

//   let queue = [];
//   queue.push([0, 0]);

//   while (queue.length) {
//     let [x, y] = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];

//       if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1) {
//         queue.push([nx, ny]);
//         arr[nx][ny] = arr[x][y] + 1;
//       }
//     }
//   }
//   return arr[n - 1][m - 1];
// }

// let arr = [
//   [1, 0, 1, 1, 1, 1],
//   [1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1],
//   [1, 1, 1, 0, 1, 1],
// ];
// console.log(solution(4, 6, arr));

// ! 백준 2023번 신비한 소수찾기
// * DFS
// const isPrime = (num) => {
//   if (num <= 1) return "NO";
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) return "NO";
//   }
//   return "YES";
// };

// function solution(n) {
//   const D = Array.from({ length: 10 ** n }, () => "");
//   let numArr = [];
//   function DFS(L, i) {
//     if (D[L] && D[L] === "NO") {
//       return;
//     } else {
//       D[L] = isPrime(L);
//       if (D[L] === "NO") {
//         return;
//       }
//       if (i === n) {
//         console.log(numArr.join(""));
//         return;
//       }
//       DFS(parseInt(numArr.slice(0, i + 1).join("")), i + 1);
//     }
//   }

//   for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
//     numArr = String(i)
//       .split("")
//       .map((item) => parseInt(item));
//     DFS(numArr[0], 1);
//   }
// }

// function solution(n) {
//   function DFS(number) {
//     if (String(number).length === n) {
//       console.log(number);
//     } else {
//       for (let i = 1; i < 10; i++) {
//         if (i % 2 === 0) continue;
//         else {
//           if (isPrime(number * 10 + i) === "YES") {
//             DFS(number * 10 + i);
//           }
//         }
//       }
//     }
//   }

//   DFS(2);
//   DFS(3);
//   DFS(5);
//   DFS(7);
// }

// solution(4);

// ! 백준 13023번 친구관계 파악하기
// * DFS
// function solution(n, m, arr) {
//   const graph = Array.from({ length: n }, () => Array.from({ length: 0 }));
//   const ch = Array.from({ length: n }, () => 0); // 방문 전이면 0
//   let answer = 0;

//   for (let [x, y] of arr) {
//     graph[x].push(y);
//     graph[y].push(x);
//   }

//   function DFS(L, sum) {
//     if (answer === 1) {
//       return;
//     }
//     if (sum === 5) {
//       answer = 1;
//       return;
//     }
//     for (let x of graph[L]) {
//       if (ch[x] === 0) {
//         ch[x] = 1;
//         DFS(x, sum + 1);
//         ch[x] = 0;
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     ch[i] = 1;
//     DFS(i, 1);
//     ch[i] = 0;
//   }
//   return answer;
// }

// console.log(
//   solution(8, 8, [
//     [1, 7],
//     [3, 7],
//     [4, 7],
//     [3, 4],
//     [4, 6],
//     [3, 5],
//     [0, 4],
//     [2, 7],
//   ])
// );

// console.log(
//   solution(6, 5, [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//     [0, 4],
//     [0, 5],
//   ])
// );
