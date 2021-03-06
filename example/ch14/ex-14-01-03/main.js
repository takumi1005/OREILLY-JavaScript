// スコープと非同期の実行
{
  function countdown() {
    console.log("カウントダウン：");
    for(let i = 5; i >= 0; i--) { /* iはブロックスコープ */
      setTimeout(function() {
        console.log(i===0 ? "GO!" : i);
      }, (5 - i) * 1000);
    }
  }
  countdown();
  
  /* 実行結果
  カウントダウン：
  5
  4
  3
  2
  1
  GO!
  */
}

// エラーファースト・コールバック
{
  // Node.jsで実行
  const fs = require('fs');

  const fname = 'xxx'; /* 存在しないファイルを指定 */
  fs.readFile(fname, function(err, data) {
    if(err)
      return console.error(`ファイル読み込み時のエラー ${fname}: ${err.message}`);
    console.log(`ファイル「${fname}」の内容を表示します：\n${data}`);
  });

  /* 実行結果
  ファイル読み込み時のエラー xxx: ENOENT: no such file or directory, open 'xxx'
  */
}