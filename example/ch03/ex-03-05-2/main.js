// 改行されない
const multiline = "1行目\
2行目";
console.log(multiline);

// 改行される
const multiline2 = "1行目\n\
2行目";
console.log(multiline2);
/* 実行結果
1行目
2行目
*/

// バッククォートを使った場合
const multiline3 = `1行目
2行目`;
console.log(multiline3);
/* 実行結果
1行目
2行目
*/

// インデントをつけると空白が入ってしまう
const multiline4 = `1行目
    2行目
    3行目`;
console.log(multiline4);
/* 実行結果
1行目
    2行目
    3行目
*/

// 文字列を複数行に分ける場合は文字列の連結を使う
const multiline5 = "1行目\n" + "2行目\n" + "3行目";
console.log(multiline5);
/* 実行結果
1行目
2行目
3行目
*/

// 文字列の連結では様々な種類の文字列を組み合わせられる
const currentTemp = 13.5;
const multiline6 =
  "現在の温度は：" +
  `${currentTemp}℃です。\n` +
  "もうじき暖かくなるはずですから少々お待ちください";
console.log(multiline6);
/* 実行結果
現在の温度は：13.5℃です。
もうじき暖かくなるはずですから少々お待ちください
*/
