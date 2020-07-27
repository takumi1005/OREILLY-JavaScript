// reduce
{
  const arr = [5, 7, 2, 4];
  const sum = arr.reduce((a, x) => a += x, 0);
  console.log(sum); // 18

  const sum2 = arr.reduce((a, x) => a + x, 0); // 「+=」の「=」 は省略できる
  console.log(sum2); // 18
}

{
  const words = ["Beachball", "Rodeo", "Angel",
                "Aardvark", "Xylophone", "November", "Chocolate",
                "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
  if(!a[x[0]]) //  先頭文字のプロパティがあるかチェック
    a[x[0]] = []; // なければ空で作成
  a[x[0]].push(x); // 現在の要素を記憶
  // console.log(a[x[0]]); // 途中経過を見るにはこれを有効に
  return a; }, {}); // オブジェクトを返す
console.log(alphabetical);

/* 実行結果
{ B: [ 'Beachball', 'Bali' ],
  R: [ 'Rodeo' ],
  A: [ 'Angel', 'Aardvark' ],
  X: [ 'Xylophone' ],
  N: [ 'November' ],
  C: [ 'Chocolate', 'Clover' ],
  P: [ 'Papaya' ],
  U: [ 'Uniform' ],
  J: [ 'Joker' ] }
*/

// 別の例
const 単語リスト = ["ビーチボール", "ルービックキューブ", "ブタペスト", "トロッコ",
                    "コンゴ", "ゴースト", "トーラス", "スマート", "トンガ",
                    "ガラパゴス", "ストリート", "トーマス", "ストレッチ",
                    "チベット", "トキ", "キツツキ", "キリン"];
const 先頭文字で分類したもの = 単語リスト.reduce((a, x) => {
    if(!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a; }, {});
console.log(先頭文字で分類したもの);
/* 実行結果
{ 'ビ': [ 'ビーチボール' ],
  'ル': [ 'ルービックキューブ' ],
  'ブ': [ 'ブタペスト' ],
  'ト': [ 'トロッコ', 'トーラス', 'トンガ', 'トーマス', 'トキ' ],
  'コ': [ 'コンゴ' ],
  'ゴ': [ 'ゴースト' ],
  'ス': [ 'スマート', 'ストリート', 'ストレッチ' ],
  'ガ': [ 'ガラパゴス' ],
  'チ': [ 'チベット' ],
  'キ': [ 'キツツキ', 'キリン' ] }
*/
}