// this
const o = {
  name: "Wallace",
  speak() {
    return `My name is ${this.name}!`;
  }
}
const o2 = {
  name: "ポチ",
  話す() {
    return `僕の名前は「${this.name}」だよ。`;
  }
}
console.log(o); // { name: 'Wallace', speak: [Function: speak] }
console.log(o2); // { '名前': 'ポチ', '話す': [Function: 話す] }
console.log(o.speak()); // My name is Wallace!
console.log(o2.話す()); // 僕の名前は「ポチ」だよ。

// 同じ関数を変数に代入した場合
const j = {
  name: "Wallace",
  speak() {
    return `My name is ${this.name}!`;
  }
}
const speak = j.speak;
console.log(speak === j.speak); // true  （どちらの定数も同じ関数を参照している）
console.log(speak()); // "My name is undefined!" （undefinedが表示されない場合あり）
console.log(j.speak()); // "My name is Wallace!"