// 関数の巻き上げとスコープ
{
  let var1;
  let var2 = undefined;
  console.log(var1); // undefined
  console.log(var2); // undefined
  console.log(undef); //エラー
}
console.log('------');
// 変数をletを使って宣言する前に使うとエラーになる
{
  x; // ReferenceError: x is not defined   （エラー）
  let x = 3;   /* （上でエラーになってしまったここには到達しない） */
}
console.log('------');
// varを使って宣言した変数は、宣言の前でも参照できる
{
  console.log(x); // undefined
  var x = 3;
  console.log(x); // 3
}
console.log('------');
// 宣言しただけだとxの値はundefinedになる
{
  var x;
  console.log(x); // undefined
  x = 3;
  console.log(x); // 3
}