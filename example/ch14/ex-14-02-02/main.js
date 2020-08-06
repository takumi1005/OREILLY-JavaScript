// catchハンドラの使用
{
  function countdown(seconds) {
    return new Promise(function(resolve, reject) {
      for(let i=seconds; i>=0; i--) {
        setTimeout(function() {
          if(i>0) console.log(i + '...');
          else resolve(console.log("GO!"));
        }, (seconds-i)*1000);
      }
    });
  }

  const p = countdown(5); /* プロミスのインスタンスを代入 */
  p.then(function() { /* 成功（fulfilled）時に行う処理を記述 */
    console.log("カウントダウン成功");
  });
  p.catch(function(err) { /* 失敗（rejected）時に行う処理を記述 */
    console.log("カウントダウンでエラーが起こった：" + err.message);
  });
  
  /* 実行結果
  5...
  4...
  3...
  2...
  1...
  GO!
  カウントダウン成功
  */
}

// エラーを出すケース
{
  function countdown(seconds) {
    return new Promise(function(onFulfilled, onRejected) {
      for(let i=seconds; i>=0; i--) {
        setTimeout(function() {
          if(i===13) return onRejected(new Error("この数は不吉過ぎます"));
          if(i>0) console.log(i + '...');
          else onFulfilled(console.log("GO!"));
        }, (seconds-i)*1000);
      }
    });
  }

  countdown(15).then(
    function() {
      console.log("カウントダウン成功");
    },
    function(err) {
      console.log("カウントダウンでエラーが起こった：" + err.message);
    }
  );
  /* 実行結果
  15...
  14...
  カウントダウンでエラーが起こった：この数は不吉過ぎます
  12...
  11...
  〈中略〉
  2...
  1...
  GO!
  */
}

// エラーが起きたら処理を止める
{
  function countdown(seconds) {
    return new Promise(function(onFulfilled, onRejected) {
      const timeoutIds = [];
      for(let i=seconds; i>=0; i--) {
        timeoutIds.push(setTimeout(
          function() {
            if(i===13) {
              timeoutIds.forEach(clearTimeout); /* すべてクリア。*/
              onRejected(new Error(`${i}という数は不吉過ぎます`));
            }
            else if(i>0) {
              console.log(i + '...');
            }
            else {
              console.log("GO!");
              onFulfilled();
            }
          }, /* 無名関数の終わり */
          (seconds-i)*1000))
        }
    });
  }
  
  countdown(15).then(
    function() {
      console.log("カウントダウン成功");
    },
    function(err) {
      console.log("カウントダウンでエラーが起こった：" + err.message);
    }
  );
  /* 実行結果
  15...
  14...
  カウントダウンでエラーが起こった：13という数は不吉過ぎます
  */
}