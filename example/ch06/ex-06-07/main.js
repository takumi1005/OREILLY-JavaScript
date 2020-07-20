// call
// 'use strict'; /* これを有効にすると「greet()」がエラーになる */
const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

/* この関数はオブジェクトに関連していないがcallを使えばthisが使えるようになる */
function greet() {
  return `私は${this.名前}よ！`;
}

console.log(greet()); // 私はundefinedよ！
console.log(greet.call(bruce)); // 私はブルースよ！ （thisをbruceに束縛して呼び出し）
console.log(greet.call(madeline)); // 私はマデラインよ！

// オブジェクトの名前を書き換える
function update(birthYear, occupation) { /* 生年と職業を更新する関数 */
  this.生年 = birthYear;
  this.職業 = occupation;
}

console.log(bruce); // { '名前': 'ブルース' }
update.call(bruce, 1949, '歌手'); /* 1949と'歌手'が関数updateの引数になる */
console.log(bruce); // { '名前': 'ブルース', '生年': 1949, '職業': '歌手' }

console.log(madeline); // { '名前': 'マデライン' }
update.call(madeline, 1942, '女優');
console.log(madeline); // { '名前': 'マデライン', '生年': 1942, '職業': '女優' }
