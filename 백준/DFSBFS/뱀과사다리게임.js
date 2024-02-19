// https://www.acmicpc.net/problem/16928

const [N, ...M] = require("fs").readFileSync("뱀과사다리게임.txt").toString().trim().split("\n");

const m = M.map((item) => item.split(" "));
const obj = {};
m.forEach((item) => {
  obj[item[0]] = Number(item[1]);
});

const dx = [1, 2, 3, 4, 5, 6];
const count = {};

const queue = [1];
count[1] = 0;
while (queue.length) {
  let v = queue.shift();
  if (v > 100) break;

  if (obj[String(v)]) {
    console.log(obj[String(v)]);
    const newNode = obj[String(v)];
    if (count[newNode]) {
      if (count[v] < count[newNode]) {
        count[newNode] = count[v];
        queue.push(newNode);
      }
    } else {
      count[newNode] = count[v];
      queue.push(newNode);
    }
  }

  for (let x of dx) {
    let newNode = v + x;

    if (obj[newNode] && newNode > obj[newNode]) {
      count[newNode] = count[v] + 1;
      if (!count[obj[newNode]] || count[newNode] < count[obj[newNode]]) {
        count[obj[newNode]] = count[newNode];
        queue.push(obj[newNode]);
      }
      continue;
    }

    if (count[newNode]) {
      if (count[v] + 1 < count[newNode]) {
        count[newNode] = count[v] + 1;
        queue.push(newNode);
      }
    } else {
      count[newNode] = count[v] + 1;
      queue.push(newNode);
    }
  }
}

console.log(count);
console.log(count[100]);
