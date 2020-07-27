// push,pop,unshift,shift
{
  let arr = ["b", "c", "d"];
  console.log(arr.push("e")); // 4  ←現在の長さ（要素数）
  console.log(arr); // [ 'b', 'c', 'd', 'e' ]
  console.log(arr.pop()); // e
  console.log(arr); // [ 'b', 'c', 'd' ]
  console.log(arr.unshift("a")); // 4  ←現在の長さ
  console.log(arr); // [ 'a', 'b', 'c', 'd' ]
  console.log(arr.shift()); // a
  console.log(arr); // [ 'b', 'c', 'd' ]
}

// 複数要素の追加(concat)
{
  let arr = [1, 2, 3];
  let arr2 = arr.concat(4, 5, 6);
  console.log(arr); // [ 1, 2, 3 ]  （← 変更なし。以降も同じ）
  console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
  arr2 = arr.concat([4, 5, 6]); //   （配列を渡す）
  console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
  arr2 = arr.concat([4, 5], 6);
  console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
  arr2 = arr.concat([4, 5], [6, 7]); // 引数は2つでいずれも配列
  console.log(arr2); // [ 1, 2, 3, 4, 5, 6, 7 ]
  arr2 = arr.concat([4, [5, 6]]); // 引数は配列ひとつでその2番目の要素が配列
  console.log(arr2); // [ 1, 2, 3, 4, [ 5, 6 ] ]
}

// 部分配列(slice)
{
  let arr = [11, 12, 13, 14, 15];
  let arr2 = arr.slice(3); // arr[3]から後ろ
  console.log(arr2); // [ 14, 15 ]
  console.log(arr); // [ 11, 12, 13, 14, 15 ]  （変更なし。以降も同じ）
  arr2 = arr.slice(2, 4); // arr[2]からarr[4]のひとつ前まで
  console.log(arr2); // [ 13, 14 ]
  arr2 = arr.slice(-2); // 最後から2番目以降
  console.log(arr2); // [ 14, 15 ]
  arr2 = arr.slice(1, -2); // arr[1]から、最後から2番目のひとつ前まで
  console.log(arr2); // [ 12, 13 ]
  arr2 = arr.slice(-2, -1); // 最後から2番目から最後から1番目のひとつ前まで
  console.log(arr2); // [ 14 ]
}

// 途中の要素への追加と削除(splice)
{
  let arr = [1, 5, 7];
  let arr2 = arr.splice(1, 0, 2, 3, 4); // arr[1]から2, 3, 4が追加される
  console.log(arr); // [ 1, 2, 3, 4, 5, 7 ]
  console.log(arr2); // [] ←何も削除されていない
  arr2 = arr.splice(5, 0, 6); // arr[5]に6が追加されて、以降ひとつずつ後ろへ
  console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]
  console.log(arr2); // [] ←何も削除されていない
  arr2 = arr.splice(1, 2) // arr[1]から2個削除
  console.log(arr); // [ 1, 4, 5, 6, 7 ]
  console.log(arr2); // [ 2, 3 ] ←削除された要素
  arr2 = arr.splice(2, 1, 'a', 'b'); // arr[2]から1個削除して'a'と'b'をそこに追加
  console.log(arr); // [ 1, 4, 'a', 'b', 6, 7 ]
  console.log(arr2); // [ 5 ] ←削除された要素
}