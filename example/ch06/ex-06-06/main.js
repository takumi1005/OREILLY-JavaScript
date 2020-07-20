// 再帰呼び出し
const g = function f(stop) { /* 関数を定義してそれをgに記憶（代入） */
  if(stop) {
    console.log('f停止');
    return;
  }
  else {
    console.log('fは停止していない');
    f(true); /* fの中でfを再度呼んでいる */
  }
}; /* ここまで関数の定義 */
g(false); /* 上の関数を呼び出し。関数の引数のstopにfalseが代入されて実行される */
console.log("----");
g(true);

/* 実行結果
fは停止していない
f停止
----
f停止
*/

// アロー関数
const o = {
  name: 'Julie',
  greetBackwards: function() { /* オブジェクトoのプロパティgreetBackwards */
    const getReverseName = () => {  /* アロー関数 */
      console.log(this); // { name: 'Julie', greetBackwards: [Function: greetBackwards] }
      let nameBackwards = '';
      for(let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }; /* ここまでアロー関数の定義 */

    return `${getReverseName()} si eman ym ,olleH`;
  }, /* オブジェクトoのプロパティgreetBackwardsの値の関数の定義の終わり */
}; /* オブジェクトoの定義の終わり */

console.log(o.greetBackwards()); // eiluJ si eman ym ,olleH