// 245의 분해합은 245 + 2 + 4 + 5 = 256
// 256의 생성자는 245;

// 1은 1 + 1 = 2
// 2는 2 + 2 = 4; 4의 가장 작은 생성자

const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[0]);

let i = 1;
let answer = 0;
while (true) {
  let sum = 0;

  sum =
    i +
    String(i)
      .split("")
      .map((item) => Number(item))
      .reduce((a, c) => a + c, 0);

  if (sum === N) {
    answer = i;
    break;
  }
  if (i > 1000000) break;

  i++;
}

console.log(answer);
