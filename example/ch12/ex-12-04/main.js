// yied式と双方向コミュニケーション
function* interrogate() { /* 質問する */
  const name = yield "お名前は？";
  const color = yield "お好きな色は何ですか？";
  return `${name}さんの好きな色は${color}だそうですよ。`;
}

const it = interrogate(); /* イテレータが返る */
console.log(it.next()); /* 最初の1回は値を渡さない（渡しても無視される）*/
 // { value: 'お名前は？', done: false }
console.log(it.next('楓')); 
 // { value: 'お好きな色は何ですか？', done: false }
console.log(it.next('緑'));
 // { value: '楓さんの好きな色は緑だそうですよ。', done: true }
console.log(it.next()); 
 // { value: undefined, done: true }