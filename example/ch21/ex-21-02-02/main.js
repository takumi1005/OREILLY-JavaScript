// objにcolorを追加
const obj = { foo: "bar" };
Object.defineProperty(obj, "color", {
  get: function () {
    return this.color;
  },
  set: function (value) {
    this.color = value;
  },
});

Object.defineProperty(obj, "name", {
  value: "シンシア",
});
Object.defineProperty(obj, "greet", {
  /* あいさつをする */
  value: function () {
    return `こんにちは。私の名前は${this.name}です。`;
  },
});

console.log(obj); // { foo: 'bar' }
console.log(obj.name); // シンシア
console.log(obj.greet()); // こんにちは。私の名前はシンシアです。
