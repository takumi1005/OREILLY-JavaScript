// 文字列を数値型に変換
const a = parseInt("16 volts", 10); //"volts"は無視。16は10進数として解釈される
console.log(a); // 16

const b = parseInt("3a", 16); //3aは16進数として解釈
console.log(b); //58

const c = parseFloat("15.5 kph"); //" kph"は無視。parseFloatは常に10進数として解釈
console.log(c); //15.5

//valueOfを使ってミリ秒数に変換
const d = new Date();
console.log(d); // 2020-07-16T08:27:58.121Z
const ts = d.valueOf(); // UTCの1970年1月1日午前0時からのミリ秒数
console.log(ts); // 1594888078121

// 論理値を変換する
const e = true;
const f = false;
const g = e ? 1 : 0; // gが真のときは１、それ以外は０になる
console.log(g);
const h = f ? 1 : 0;
console.log(h);

// toStringメソッド例
const i = new Date();
console.log(i.toString()); // Thu Jul 16 2020 18:11:57 GMT+0900 (GMT+09:00)
const arr = [1, true, "hello"];
console.log(arr.toString()); // 1,true,hello

// 論理値への変換
const n1 = 0;
const b0 = !n1;
const b1 = !!n1;
const b2 = Boolean(n1);
console.log(n1); // 0
console.log(b0); // true
console.log(b1); // false
console.log(b2); // false

const m1 = 1;
const c0 = !m1;
const c1 = !!m1;
const c2 = Boolean(m1);
console.log(m1); // 1
console.log(c0); // fasle
console.log(c1); // true
console.log(c2); // true
