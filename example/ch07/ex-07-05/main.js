// 即時関数  IIFE
{
  const message = (function() {
    const secret = "私は秘密です";
    return `秘密の長さは${secret.length}です`;
  })();
  console.log(message);
}

console.log('------');

// 関数の呼ばれた回数をカウントする事もできる
{
  const f = (function() {
    let count = 0;
    return function() {
      return `この関数が呼ばれた回数：${++count}回。`;
    }
  })();
  
  console.log(f()); // この関数が呼ばれた回数：1回。
  console.log(f()); // この関数が呼ばれた回数：2回。
  console.log(f()); // この関数が呼ばれた回数：3回。
}