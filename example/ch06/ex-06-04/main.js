// オブジェクトのメソッド
const o = {
  name: "Wallace", // プロパティがプリミティブ
  bark: function () {  // プロパティが関数（メソッド）
    return "Woof!";
  },
};
const o2 = {
  名前: "ポチ",
  吠える: function () {
    return "ウーッ、ワン！";
  },
};
console.log(o); // { name: 'Wallace', bark: [Function: bark] }
console.log(o2); // { '名前': 'ポチ', '吠える': [Function: 吠える] }
console.log(o.bark()); // Woof!
console.log(o2.吠える()); // ウーッ、ワン！

// メソッドの省略記法(上記と同じ処理)
const o = {
  name: 'Wallace',  // プロパティがプリミティブ
  bark() { // プロパティが関数。簡略形式
    return 'Woof!';
  },
}
const o2 = {
  名前: 'ポチ',
  吠える() {
    return 'ウーッ、ワン！';
  },
}
console.log(o); // { name: 'Wallace', bark: [Function: bark] }
console.log(o2); // { '名前': 'ポチ', '吠える': [Function: 吠える] }
console.log(o.bark()); // Woof!
console.log(o2.吠える()); // ウーッ、ワン！