// 引数の分割代入
function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
  // 主語      動詞     目的語
}

const o = {
  subject: "I", // 主語
  verb: "love", // 動詞
  object: "JavaScript", // 目的語
};

console.log(getSentence(o)); // "I love JavaScript"

// 配列の分割代入
function getSentence1([subject, verb, object]) {
  return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];
console.log(getSentence1(arr)); // "I love JavaScript"

// スプレッド演算子を使って残りの引数をまとめる
function addPrefix(prefix, ...words) {
  /* 接頭辞を追加 */
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex")); // ['converse', 'convex']
console.log(addPrefix("非", "プログラマー", "デザイナー", "コーダー")); // [ '非プログラマー', '非デザイナー', '非コーダー' ]

// デフォルト引数
function f(a, b = "default", c = 3) {
  return `${a} - ${b} - ${c}`;
}

console.log(f(5, 6, 7)); // 5 - 6 - 7
console.log(f(5, 6)); // 5 - 6 - 3
console.log(f(5)); // 5 - default - 3
console.log(f()); // undefined - default - 3
