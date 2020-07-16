const a1 = [1, 2, 3, 4]; // 4つの数値を含む配列
const a2 = [1, "two", 3, null]; // 型が混在している配列
const a3 = [
  // 文字列の配列
  "What the hammer?  What the chain?",
  "In what furnace was thy brain?",
  "What the anvil?  What dread grasp",
  "Dare its deadly terrors clasp?",
];
const a4 = [
  // 3つのオブジェクトを含む配列
  { name: "Ruby", hardness: 9 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 },
];
const b4 = [
  // 同じく３つのオブジェクトの配列。日本語のプロパティ
  { 名前: "ルビー", 硬度: 9 },
  { 名前: "ダイヤ", 硬度: 10 },
  { 名前: "トパーズ", 硬度: 8 },
];
const a5 = [
  // 配列を要素とする配列
  [1, 3, 5],
  [2, 4, 6],
];

const a = ["a", "b", "c"];
console.log(a.length); // 3  （配列の大きさ）
console.log(a[0]); // a   （最初の要素を取得）
console.log(a[a.length - 1]); // c （最終要素の添字はarr.length-1）
console.log(b4[1].名前); // ダイヤ
console.log(b4[2].硬度); // 8

const a6 = [1, 2, "c", 4, 5];
a6[2] = 3; // 3番目の要素に代入
console.log(a6); // [1, 2, 3, 4, 5]
console.log(a6.length); // 5

a6[81.3] = "eighty-one point three";
console.log(a6[81.3]); // eighty-one point three
a6[-2] = "マイナス2";
console.log(a6[-2]); // マイナス2
console.log(a6); // [ 1, 2, 3, 4, 5, '81.3': 'eighty-one point three', '-2': 'マイナス2' ]
console.log(a6.length); // 5
