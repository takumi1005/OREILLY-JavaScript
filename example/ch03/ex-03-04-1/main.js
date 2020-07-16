// \を使って引用符をエスケープできる
const dialog1 = 'He looked up and said "don\'t do that!" to Max.';
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
console.log(dialog1); // He looked up and said "don't do that!" to Max.
console.log(dialog1 === dialog2); // true  （文字列が等しいか確認。）

// テンプレートリテラルを使えばエスケープの必要はない
const dialog3 = `He looked up and said "don't do that!" to Max.`;
console.log(dialog3); // He looked up and said "don't do that!" to Max.
console.log(dialog2 === dialog3); // true
