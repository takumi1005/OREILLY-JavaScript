// 戻り値
function getGreeting() {
  return "Hello world!";
}
const message = getGreeting();
console.log(message);

// 呼び出しと参照
function getGreeting1() {
  return "Hello world!";
}
console.log(getGreeting1()); // Hello world!
console.log(getGreeting1); // function getGreeting1()

const f = getGreeting1();
console.log(f); // Hello world!

// 関数をオブジェクトのプロパティにする
const o = {};
o.f = getGreeting1();
console.log(o.f); // Hello world!

// 配列の要素として関数を代入
const arr = [1, 2, 3];
arr[1] = getGreeting1; // arr は[1, function getGreeting1(), 3]になる
const messege1 = arr[1]();
console.log(message1); // Hello world!
