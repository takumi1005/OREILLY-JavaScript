// スコープ
function f(x) {
  return x + 3;
}
console.log(f(5)); // 8
console.log(x); // エラー

// 静的スコープと動的スコープ
function f1() {
  console.log('f1'); // f1
}
function f2() {
  console.log('f2'); // f2
}
f2();
f1();
f2();

const x1 = 3;
function f3() {
  console.log(x1); // 3  （これは動く）
  console.log(y); // ReferenceError: y is not defined  （エラーになる）
}
const y = 3; // アクセルスできる
f3();
// const y = 3; // エラーになる