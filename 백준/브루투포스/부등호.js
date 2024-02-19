const fs = require("fs");
const [n, input] = fs.readFileSync("부등호.txt").toString().trim().split("\n");

const N = Number(n);
let 부등호 = input.split(" ");
부등호 = [0, ...부등호];
const ch = Array.from({ length: 10 }, () => 0);
const answer = [];

function DFS(L, arr) {
  // 숫자가 모두 선택되었으면
  if (L === N + 1) {
    answer.push(arr.join(""));
    return;
  }
  // 숫자 선택과정
  for (let i = 0; i < 10; i++) {
    // 첫번째 숫자는 그냥 선택, 두번째 숫자부터 부등호가 맞는지 확인하는 if문
    if (L !== 0) {
      if (부등호[L] === "<") {
        if (arr[L - 1] >= i) continue; // 부등호가 안맞으면 해당 숫자를 선택하지 않는다.
      } else if (부등호[L] === ">") {
        if (arr[L - 1] <= i) continue;
      }
    }

    // 해당 숫자가 이미 선택된 숫자인지 아닌지를 확인하는 if문
    if (ch[i] === 0) {
      ch[i] = 1;
      DFS(L + 1, [...arr, i]);
      ch[i] = 0;
    }
  }
}

DFS(0, []);

console.log(answer[answer.length - 1]);
console.log(answer[0]);
