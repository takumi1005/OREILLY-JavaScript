// 比較演算子
const n = 5;
const s = "5";
console.log(n === s); // false   （データ型が異なる）
console.log(n !== s); // true
console.log(n === Number(s)); // true   （文字列の"5"が数値の5に変換される）
console.log(n !== Number(s)); // false
console.log(n == s); // true    （非推奨）
console.log(n != s); // false   （非推奨）

const a = { name: "あるオブジェクト" };
const b = { name: "あるオブジェクト" };
console.log(a === b); // false   （別のオブジェクトを指している）
console.log(a !== b); // true
console.log(a == b); // false    （非推奨）
console.log(a != b); // true     （非推奨）

// 関係演算子
console.log(3 > 5); // false  （3は5より大きくはない）
console.log(3 >= 5); // false  （3は5以上ではない）
console.log(3 < 5); // true  （3は5より小さい）
console.log(3 <= 5); // true  （3は5以下である）

console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 < 5); // false
console.log(5 <= 5); // true

// NaNについて
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(3)); // false
console.log(isNaN(3.6)); // false
console.log(isNaN("abc")); // true
