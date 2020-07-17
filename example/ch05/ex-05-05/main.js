// 分割代入(デストラクチャリング)
const obj = { b: 2, c: 3, d: 4 }; // オブジェクトの定義
const { a, b, c } = obj; // 分割代入
console.log(a); // undefined   （objにはプロパティaがない）
console.log(b); // 2
console.log(c); // 3
console.log(d); // ReferenceError: d is not defined （エラー。dには代入されていない）

const obj1 = { b1: 2, c1: 3, d1: 4 };
let a1, b1, c1;

({ a1, b1, c1 } = obj1); // 括弧で囲む必要がある
console.log(a1);
console.log(b1);
console.log(c1);

// {a, b, c} = obj1; // SyntaxError: Unexpected token =
/* （エラーになる。ブロック（文の集まり）を囲む{...}だと解釈される） */

const arr = [1, 2, 3];
let [x, y] = arr;
console.log(x); // 1
console.log(y); // 2

// スプレッド演算子
const arr1 = [1, 2, 3, 4, 5];
let [x1, y2, ...rest] = arr1;
console.log(x); // 1
console.log(y); // 2
console.log(rest); // [ 3, 4, 5 ]
