const arr = Array.from({ length: 20000 }, () => 0);

for (let i = 1; i <= 10000; i++) {
  let sum = 0;

  sum =
    i +
    String(i)
      .split("")
      .reduce((a, c) => a + Number(c), 0);

  arr[sum]++;
}

for (let i = 1; i <= 10000; i++) {
  if (arr[i] === 0) console.log(i);
}
