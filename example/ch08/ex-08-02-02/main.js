// 配列内の要素の削除や置き換え(copyWithin)
{
  let arr = [11, 12, 13, 14];
  let arr2 = arr.copyWithin(1, 2); // arr[1]の位置から置き換える。arr[2]から最後までコピーする
  console.log(arr); // [ 11, 13, 14, 14 ]
  console.log(arr2); // [ 11, 13, 14, 14 ] ← copyWithinはオブジェクト自身を返す
  console.log(arr.copyWithin(2, 0, 2)); // [ 11, 13, 11, 13 ]
  // ↑ arr[2]の位置から置き換える。arr[0]からarr[2]の前までコピーする
  console.log(arr.copyWithin(0, -3, -1)); // [ 13, 11, 11, 13 ]
  // ↑ arr[0]の位置から置き換える。最後から3番目の要素から最後の要素のひとつ前まで
  //    （つまりarr[1]からarr[2]まで）コピーする
  console.log(arr2); // [ 13, 11, 11, 13 ]
  // ↑ arrを変更すると同じ配列を指しているarr2も変わる
}

// 配列を特定の値で埋める(fill)
{
  let arr = new Array(5).fill(1); // 大きさ5の配列を作り全体を1で初期化する
  console.log(arr); // [ 1, 1, 1, 1, 1 ]
  let arr2 = arr.fill("a"); // すべての要素に "a" を代入する
  console.log(arr); // [ 'a', 'a', 'a', 'a', 'a' ]
  console.log(arr2); // [ 'a', 'a', 'a', 'a', 'a' ] ← fillはオブジェクト自身を返す
  console.log(arr.fill("b", 1)); // [ 'a', 'b', 'b', 'b', 'b' ]
  // ↑ arr[1]から最後まで "b" を代入する
  console.log(arr.fill("c", 2, 4)); // [ 'a', 'b', 'c', 'c', 'b' ]
  // ↑ arr[2]からarr[4]の前まで（つまりarr[3]まで） "c" を代入する
  console.log(arr.fill(5.5, -4)); // [ 'a', 5.5, 5.5, 5.5, 5.5 ]
  // ↑ 最後から4番目の要素（つまりarr[1]）から最後まで 5.5 を代入する
  console.log(arr.fill(0, -3, -1)); // [ 'a', 5.5, 0, 0, 5.5 ]
  // ↑ 最後から3番目の要素（つまりarr[2]）から最後の要素のひとつ前（つまりarr[3]）まで0を代入
}

// 要素を逆順に並び替える(reverse)
{
  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr.reverse();
  console.log(arr); // [ 5, 4, 3, 2, 1 ]
  console.log(arr2); // [ 5, 4, 3, 2, 1 ]  ← reverseはオブジェクト自身を返す
  arr.reverse();
  console.log(arr); // [ 1, 2, 3, 4, 5 ]
  console.log(arr2); // [ 1, 2, 3, 4, 5 ]
}

// 要素のソート(sort)
{
  let arr = [5, 3, 2, 4, 1];
  let arr2 = arr.sort();
  console.log(arr); // [ 1, 2, 3, 4, 5 ]
  console.log(arr2); // [ 1, 2, 3, 4, 5 ]
  arr2.reverse();
  console.log(arr); // [ 5, 4, 3, 2, 1 ]
  console.log(arr2); // [ 5, 4, 3, 2, 1 ]
}

// ソート時に使う関数の指定
let arr = [{ name: "Suzanne" }, { name: "Jim" },
            { name: "Trevor" }, { name: "Amanda" }];
console.log(arr);
arr.sort((a, b) => a.name > b.name);  // nameでソート
console.log("------");
console.log(arr);
arr.sort((a, b) => a.name[1] < b.name[1]); // nameの2文字目で逆順にソート
console.log("------");
console.log(arr);

/* 実行結果 
[ { name: 'Suzanne' },
  { name: 'Jim' },
  { name: 'Trevor' },
  { name: 'Amanda' } ]
------
[ { name: 'Amanda' },
  { name: 'Jim' },
  { name: 'Suzanne' },
  { name: 'Trevor' } ]
------
[ { name: 'Suzanne' },
  { name: 'Trevor' },
  { name: 'Amanda' },
  { name: 'Jim' } ]
*/