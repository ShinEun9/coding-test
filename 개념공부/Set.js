// ! 1. Set, add, size, delete, has, clear 메서드
const s = new Set("abcdeee");
console.log(s);
console.log(s.size);
s.add("f");
console.log(s.size);
console.log(s.delete("f")); // true
console.log(s.has("f")); // false
// s.clear();

const ss = new Set(["a", "b", "c", "d", "e", "e", "e"]);
console.log(ss);

// ! 2. Set 순회
for (let variable of s) {
  console.log(variable);
}

//
