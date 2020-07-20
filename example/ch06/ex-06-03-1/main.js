// 関数の引数
function avg(a, b) {
  return (a + b) / 2;
}
const a = 5,
  b = 10;
console.log(avg(a, b)); //7.5

function f(x) {
  console.log(`  関数fの中（代入の前）: x=${x}`);
  x = 5;
  console.log(`  関数fの中（代入の後）: x=${x}`);
}
let x = 3;
console.log(`関数fを呼び出す前: x=${x}`);
f(x);
console.log(`関数fを呼び出した後: x=${x}`);

function e(o) {
  console.log(`関数fの中、o.messageに代入する前の値："${o.message}"`);
  o.message = "messageの値を関数fの中で設定した！";
  console.log(`関数fの中、o.messageに代入した後の値："${o.message}"`);
}

let o = {
  message: "messageの初期値",
};
console.log(`関数fを呼び出す前： o.message="${o.message}"`);
e(o);
console.log(`関数fを呼び出した後: o.message="${o.message}"`);
