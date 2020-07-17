const s = 5;
console.log(3 + +s); // 8   （+sなので、数字の5と解釈される）
console.log(3 + s); // 35   （文字列の連結となる）

const x1 = 0,
  x2 = 3,
  x3 = -1.5,
  x4 = -6.33;
console.log(-x1 * 1); // -0
console.log(+x2 * 2); // 6
console.log(+x3 * 3); // -4.5
console.log(-x4 * 4); // 25.32

// 剰余演算子
console.log(10 % 3); // 1
console.log(-10 % 3); // -1
console.log(-10 % 4); // -2
console.log(10 % -3); // 1
console.log(10 % -4); // 2
console.log(10 % 3.6); // 2.8
console.log(10 % 2.5); // 0

// インクリメント演算子とデクリメント演算子
let x = 2;
console.log(x++ + x++);
console.log(++x + ++x);
console.log(x++ + ++x);
console.log(++x + x++);
console.log(x);
console.log("-----");
let y = 10;
console.log(y-- + y--);
console.log(--y + --y);
console.log(y-- + --y);
console.log(--y + y--);
console.log(y);
/* 結果
5    （2 + 3。  最終的なxの値は4）
11   （5 + 6。  最終的なxの値は6）
14   （6 + 8。  最終的なxの値は8）
18   （9 + 9。  最終的なxの値は10）
10
-----
19   （10 + 9。 最終的なyの値は8）
13   （7 + 6。  最終的なyの値は6）
10   （6 + 4。  最終的なyの値は4）
6    （3 + 3。  最終的なyの値は2）
2
*/
