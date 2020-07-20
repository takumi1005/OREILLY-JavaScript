// 型を調べる(letの登場以前)
{
  if(typeof x === "undefined") {
    console.log("xは存在していない、あるいはundefined");
  } else {
    // xを参照しても大丈夫...
  }
  var x;
}
console.log('------');
// letは参照できない（出来なくても問題ない）
{
  if(typeof x === "undefined") { // ReferenceError: x is not defined （エラー）
    console.log("xは存在していない、あるいはundefined");
  } else {
    // xを参照しても大丈夫... ではない！
  }
  let x = 5;
}
