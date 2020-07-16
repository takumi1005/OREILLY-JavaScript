const sam1 = {
  name: "Sam",
  age: 4,
};
console.log(sam1);

const sam2 = { name: "Sam", age: 4 }; /* 1行で宣言 */
console.log(sam2);

console.log(sam1.name === sam2.name); // true
console.log(sam1.age === sam2.age); // true
console.log(sam1 === sam2); // false

const sam3 = {
  name: "Sam",
  classification: {
    /* プロパティの値がオブジェクト */
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Mamalia",
    order: "Carnivoria",
    family: "Felinae",
    subfaimily: "Felinae",
    genus: "Felis",
    species: "F. catus",
  },
};
console.log(sam3);
/* 上の行の出力
{ name: 'Sam',
  classification: 
  { kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfaimily: 'Felinae',
    genus: 'Felis',
    species: 'F. catus' } }
*/

const タマ = {
  名前: "タマ",
  分類: {
    // プロパティの値がオブジェクト
    界: "動物界",
    門: "脊索動物門",
    綱: "哺乳綱",
    目: "ネコ目",
    科: "ネコ科",
    亜科: "ネコ亜科",
    属: "ネコ属",
    種: "ネコ",
  },
};
console.log(タマ);
/* 上の行の出力
{ '名前': 'タマ',
  '分類': 
  { '界': '動物界',
    '門': '脊索動物門',
    '綱': '哺乳綱',
    '目': 'ネコ目',
    '科': 'ネコ科',
    '亜科': 'ネコ亜科',
    '属': 'ネコ属',
    '種': 'ネコ' } }
*/

// アクセス方
console.log(sam3.classification.family); // Felinae
console.log(sam3["classification"].family); // Felinae
console.log(sam3.classification["family"]); // Felinae
console.log(sam3["classification"]["family"]); // Felinae

console.log(タマ.分類.科); // ネコ科
console.log(タマ["分類"].科); // ネコ科
console.log(タマ.分類["科"]); // ネコ科
console.log(タマ["分類"]["科"]); // ネコ科

// 関数
sam3.speak = function () {
  return "Meow!";
};
タマ.泣く = function () {
  return "ニャー";
};

// 関数の呼び出し
console.log(sam3.speak());
console.log(タマ.泣く());

// delete演算子
delete sam3.classification; // classificationツリー全体を削除
delete sam3.speak; // speak関数を削除
console.log(sam3); // { name: 'Sam' }

delete タマ.分類;
delete タマ.鳴く;
console.log(タマ); // { '名前': 'タマ' }
