// ! 1. Map 생성 및 set, get, has, delete, size 메서드 사용
let m = new Map();
m.set("하나", "1");
m.set(1, "하나");
console.log(m); // {'하나' => '1', 1 => '하나'}
console.log(m.get("하나")); // 1
console.log(m.has("하나")); // true
console.log(m.has(2)); // false
console.log(m.delete("하나")); // true, 없는 것을 삭제하려하면 false나옴
console.log(m); // {1 => '하나'}
console.log(m.size); // 1

// ! 2. Object는 순회를 직접할 수 없지만, Map 은 가능하다
m.set(2, "둘");
m.set(3, "셋");
for (let variable of m) {
  console.log("m을 순회하고 있습니다.", variable, variable[0], variable[1]);
}
// * 직접 순회가 가능하지 않은 Object
let data2 = { one: 1, two: 2 };
for (const i of data2) {
  // console.log(i); // 작동되지 않는다. => data is not iterable error
}

// ! 3. keys(), values(), entries();
console.log(m.keys()); // MapIterator {1, 2, 3}
console.log(m.values()); // MapIterator {'하나', '둘', '셋'}
console.log(m.entries()); // MapIterator {1 => '하나', 2 => '둘', 3 => '셋'}

// ! 4. [[key,  value], [key, value]] 형식일 때 Map을 만들 수 있다.
let temp = new Map([
  ["하나", 1],
  ["둘", 2],
  ["셋", 3],
]);
console.log(temp);
let temp2 = new Map([...temp, ["넷", 4]]);
console.log(temp2);

//  let data = new Map([["하나", 1], ["둘", 2], ["셋", 3]]) // O
// let data = new Map(Object.entries({ 'one': 1, 'two': 2 })) // O
// let data = new Map({ 'one': 1, 'two': 2 }) // X => iterable한 객체여야한다.
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// ! 5. 형변환
// Map -> Object간의 형변환
let 맵 = new Map(Object.entries({ one: 1, two: "2" }));
let 오브젝트 = Obejct.fromEntries(맵);
