const fs = require("fs");

const input = fs
  .readFileSync("일곱난쟁이.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const totalSum = input.reduce((a, c) => a + c, 0);

for (i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (totalSum - 100 === input[i] + input[j]) {
      input.splice(j, 1);
      input.splice(i, 1);
      break;
    }
  }
  if (input.length === 7) break;
}

input.sort((a, b) => a - b).forEach((item) => console.log(item));
