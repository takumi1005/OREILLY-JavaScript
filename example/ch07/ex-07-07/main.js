// 関数の巻き上げ
// 呼び出せる
{
  f(); // 関数fが呼び出された
  function f() {
  console.log('関数fが呼び出された');
  }
}
console.log('------');
// 呼び出せない
{
  f(); // ReferenceError: f is not defined
  let f = function() {
  console.log('関数fが呼び出された');
  }
}
console.log('------');
// 呼び出せる
{
  let f = function() {
    console.log('関数fが呼び出された');
  }
  console.log(f); // [Function: f]
  f(); // 関数fが呼び出された
}