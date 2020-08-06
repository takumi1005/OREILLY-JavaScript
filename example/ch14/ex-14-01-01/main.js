// コールバック
{
  console.log("setTimeoutの前: " + new Date());
  function f() {
    console.log("これは関数fの中: " + new Date());
  }
  setTimeout(f, 10*1000); /* 10秒後にfを実行。コールバック */
  console.log("setTimeoutの後");
  console.log("これもsetTimeoutの後");

  /* 実行結果
  setTimeoutの前: Thu Oct 27 2016 18:02:54 GMT+0900 (JST)
  setTimeoutの後
  これもsetTimeoutの後
  これは関数fの中: Thu Oct 27 2016 18:03:04 GMT+0900 (JST)
  */
}

// 通常は次のように無名関数を使う
{
  console.log("setTimeoutの前：" + new Date());
  setTimeout(
    function() {
      console.log("setTimeoutに指定された無名関数の中：" + new Date());
    },   /* ここまでsetTimeoutの第1引数（無名関数） */
    10*1000   /* setTimeoutの第2引数 */
    ); 
  console.log("setTimeoutの後");
  console.log("これもsetTimeoutの後");

  /* 実行結果
  setTimeoutの前：Fri Nov 04 2016 06:54:15 GMT+0900 (JST)
  setTimeoutの後
  これもsetTimeoutの後
  setTimeoutに指定された無名関数の中：Fri Nov 04 2016 06:54:25 GMT+0900 (JST)
  */
}

// アロー関数を使うと下記のようになる
{
  console.log("setTimeoutの前：" + new Date());
  setTimeout( () => console.log("アロー関数の中：" + new Date()), 10*1000); 
  console.log("setTimeoutの後");
  console.log("これもsetTimeoutの後");

  /* 実行結果
  setTimeoutの前：Fri Nov 04 2016 06:53:30 GMT+0900 (JST)
  setTimeoutの後
  これもsetTimeoutの後
  アロー関数の中：Fri Nov 04 2016 06:53:40 GMT+0900 (JST)
  */
}