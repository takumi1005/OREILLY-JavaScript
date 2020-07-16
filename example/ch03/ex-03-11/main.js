// 初期化された日時を生成
const now = new Date();
console.log(now);

// 特定の日時で初期化
const halloween = new Date(2020, 9, 31); //月は0から始まる
console.log(halloween);
const halloweenParty = new Date(2020, 9, 31, 19, 0);
console.log(halloweenParty);

// 年、月、日、時刻などを取得
console.log(halloweenParty.getFullYear()); // 2020
console.log(halloweenParty.getMonth()); // 9
console.log(halloweenParty.getDate()); // 31
console.log(halloweenParty.getDay()); // 1 （月曜。0=日曜、1=月曜、...)
console.log(halloweenParty.getHours()); // 19
console.log(halloweenParty.getMinutes()); // 0
console.log(halloweenParty.getSeconds()); // 0
console.log(halloweenParty.getMilliseconds()); // 0
