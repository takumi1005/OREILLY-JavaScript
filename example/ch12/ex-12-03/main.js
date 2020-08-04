// ジェネレータ
function* rainbow() { /* 「*」でジェネレータであることを示す */
  yield '赤';
  yield '橙';
  yield '黄';
  yield '緑';
  yield '青';
  yield '水色';
  yield '紫';
}

const it = rainbow(); /* イテレータを取得 */
console.log(it.next()); // { value: '赤', done: false }
console.log(it.next()); // { value: '橙', done: false }
console.log(it.next()); // { value: '黄', done: false }
console.log(it.next()); // { value: '緑', done: false }
console.log(it.next()); // { value: '青', done: false }
console.log(it.next()); // { value: '水色', done: false }
console.log(it.next()); // { value: '紫', done: false }
console.log(it.next()); // { value: undefined, done: true }
console.log(it.next()); // { value: undefined, done: true }

console.log("--------");

for(let color of rainbow()) {
 console.log(color);
}
/* 実行結果
赤
橙
黄
緑
青
水色
紫
*/