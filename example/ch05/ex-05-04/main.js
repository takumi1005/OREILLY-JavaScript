// Math.abs関数
let x = 0;
while (true) {
  x += 0.1;
  console.log(x);
  if (Math.abs(x - 0.3) < Number.EPSILON) break;
}
console.log(`${x}で停止。`);
/* 実行結果
0.1
0.2
0.30000000000000004
0.30000000000000004で停止。
*/

// 文字列の連結
console.log(3 + 5 + "8"); // 88
console.log("3" + 5 + 8); // 358

// 真とみなされる値と偽とみなされる値
if (undefined) console.log("t");
else console.log("f"); // f
if (null) console.log("t");
else console.log("f"); // f
if (0) console.log("t");
else console.log("f"); // f
if (NaN) console.log("t");
else console.log("f"); // f
if ("") console.log("t");
else console.log("f"); // f

console.log("------");
const obj1 = {};
if (obj1) console.log("t");
else console.log("f"); // t
const arr = [];
if (arr) console.log("t");
else console.log("f"); // t
if (" ") console.log("t");
else console.log("f"); // t
if ("false") console.log("t");
else console.log("f"); // t

// 条件演算子
const doIt = false;
const result = doIt ? "Did it!" : "Didn't do it.";
console.log(result); // Didn't do it.

// カンマ演算子
let x1 = 0,
  y1 = 10,
  z;
z = (x1++, y++);
console.log(z); // 10

(x1 = 0), (y1 = 10);
(z = x1++), y1++;
console.log(z); // 0

// typeof演算子
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof true); // boolean
console.log(typeof 1); // number
console.log(typeof ""); // string
console.log(typeof Symbol()); // symbol
console.log(typeof function () {}); // function
console.log("----");
let a = typeof undefined;
console.log(typeof a); // string
console.log(void 1);
