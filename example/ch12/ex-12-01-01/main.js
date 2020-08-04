// 配列はイテレーション可能なオブジェクト
{
  const book = [
    "ある所に初老の夫婦が住んでたとさ。",
    "夫は山へ妻は川へ行ったとさ。",
    "妻が川で洗濯をしていると、",
    "上流から桃が流れてきたとさ。",
    "ドンブラコッコ、スッコッコ、",
    "ドンブラコッコ、スッコッコ。",
  ];

  for (let aPage of book) {
    console.log(aPage);
  }
  /* 実行結果
  ある所に初老の夫婦が住んでたとさ。
  夫は山へ妻は川へ行ったとさ。
  妻が川で洗濯をしていると、
  上流から桃が流れてきたとさ。
  ドンブラコッコ、スッコッコ、
  ドンブラコッコ、スッコッコ。
  */

  // book.next();
  /* 実行結果 （エラーが起こる）
  TypeError: book.next is not a function
  */
  // 配列をイテレータに変換
  const it = book.values();
}

// nextを使う
{
  const book = [
    "ある所に初老の夫婦が住んでたとさ。",
    "夫は山へ妻は川へ行ったとさ。",
    "妻が川で洗濯をしていると、",
    "上流から桃が流れてきたとさ。",
    "ドンブラコッコ、スッコッコ、",
    "ドンブラコッコ、スッコッコ。",
  ];
  
  const it = book.values();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  
  /* 実行結果
  Object { value: "ある所に初老の夫婦が住んでたとさ。", done: false }
  Object { value: "夫は山へ妻は川へ行ったとさ。", done: false }
  Object { value: "妻が川で洗濯をしていると、", done: false }
  Object { value: "上流から桃が流れてきたとさ。", done: false }
  Object { value: "ドンブラコッコ、スッコッコ、", done: false }
  Object { value: "ドンブラコッコ、スッコッコ。", done: false }
  Object { value: undefined, done: true }
  Object { value: undefined, done: true }
  */
}