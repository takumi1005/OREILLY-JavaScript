// 日時関連の文字列の表示
/* 日本で実行 */
{
  const d = new Date(Date.UTC(1930, 4, 10, 10, 0)); /* UTC1930年5月10日午前10時0分 */
  console.log(d.toLocaleDateString()); // 1930-5-10
  console.log(d.toLocaleTimeString()); // 19:00:00
  console.log(d.toTimeString()); // 19:00:00 GMT+0900 (JST)
  console.log(d.toUTCString()); // Sat, 10 May 1930 10:00:00 GMT

  const moment = require('moment-timezone');
  console.log(moment(d).format("YYYY-MM-DD")); // 1930-05-10
  console.log(moment(d).format("YYYY-MM-DD HH:mm")); // 1930-05-10 19:00
  console.log(moment(d).format("YYYY-MM-DD HH:mm Z")); // 1930-05-10 19:00 +09:00
  console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z")); // 1930-05-10 19:00 UTC+09:00
  console.log(moment(d).format("dddd, MMMM [the] Do, YYYY")); // Saturday, May the 10th, 1930
  console.log(moment(d).format("h:mm a")); // 7:00 pm
  console.log(moment(d).format("YYYY年M月D日 hh:mmA")); // 1930年5月10日 07:00PM
}

// 月、日、曜日、時、分の取得
{
  /* 日本で実行 */
  const d = new Date(Date.UTC(1815, 9, 10));
  console.log(d.getFullYear()); // 1815
  console.log(d.getMonth()); // 9  （ →10月）
  console.log(d.getDate()); // 10
  console.log(d.getDay()); // 2  （→火曜日）
  console.log(d.getHours()); // 9
  console.log(d.getMinutes()); // 0
  console.log(d.getSeconds()); // 0
  console.log(d.getMilliseconds()); // 0

  /* UTCで出力 */
  console.log(d.getUTCFullYear()); // 1815
  console.log(d.getUTCMonth()); // 9  （→10月）
  console.log(d.getUTCDate()); // 10
  console.log(d.getUTCDay()); // 2  （→火曜日）
  console.log(d.getUTCHours()); // 0
  console.log(d.getUTCMinutes()); // 0
  console.log(d.getUTCSeconds()); // 0
  console.log(d.getUTCMilliseconds()); // 0
}

// 日時の比較
{
  const d1 = new Date(1996, 2, 1);
  const d2 = new Date(2009, 4, 27);
  console.log(d1 > d2); // false
  console.log(d1 < d2); // true
}