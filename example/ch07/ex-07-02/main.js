// グローバルスコープ
let name = "桃太郎"; /* グローバル変数 */
let age = 25;        /* グローバル変数 */

function greet() { /* あいさつをする */
  console.log(`こんにちは、${name}さん！`);
}
function getBirthYear() { /* 生年を得る */
  return new Date().getFullYear() - age; /* 今年から年齢を引く */
}

greet(); // こんにちは、桃太郎さん！
console.log(getBirthYear()); // 1991  （実行する年によって変わる）

// オブジェクトにまとめる
let user = { /* オブジェクトを定義 */
  name: "桃太郎",
  age: 25,
};

function greet() { /* あいさつをする */
  console.log(`こんにちは、${user.name}さん！`);
}
function getBirthYear() { /* 生年を得る */
  return new Date().getFullYear() - user.age;
}

greet(); // こんにちは、桃太郎さん！
console.log(getBirthYear()); // 1991  （実行する年によって変わる）

// さらに改良する
let user = { /* オブジェクトを定義 */
  name: "桃太郎",
  age: 25,
};

function greet(person) { /* あいさつをする */
  console.log(`こんにちは、${person.name}さん！`);
}
function getBirthYear(person) { /* 生年を得る */
  return new Date().getFullYear() - person.age;
}

greet(user); // こんにちは、桃太郎さん！
console.log(getBirthYear(user)); // 1991