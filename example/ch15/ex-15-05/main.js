// 日時の演算
{
  const d1 = new Date(1996, 2, 1);
  const d2 = new Date(2009, 4, 27);
  const msDiff = d2 - d1;
  console.log(msDiff); // 417744000000   （ミリ秒）
  const daysDiff = msDiff/1000/60/60/24;
  console.log(daysDiff); // 4835   （日）
}

// 日時をソート
{
  const dates = [];
  const min = new Date(2017, 0, 1).valueOf();
  const delta = new Date(2020, 0, 1).valueOf() - min; /* 差 */

  /* 2017年1月1日から2020年1月1日の間の日時をランダムに生成して、datesに記憶 */
  for(let i=0; i<10; i++)
    dates.push(new Date(min + delta*Math.random()));

  printDates(dates);
  console.log("----");
  dates.sort((a, b) => b - a); /* 降順にソート*/
  printDates(dates);
  console.log("----");
  dates.sort((a, b) => a - b); /* 昇順にソート*/
  printDates(dates);

  function printDates(dates) {
    for(let i=0; i<dates.length; i++) {
      const d = dates[i];
      console.log(i + ". " + d.getFullYear()+"年"+(d.getMonth()+1)+"月"
      +d.getDate()+"日");
    }
  }
}

// Moment.jsを使って任意の時間の単位で足し算や引き算をする
{
  const moment = require('moment-timezone');

  let m = moment(); /* 現在 */
  console.log(m.format()); // 2020-08-07T12:38:10+09:00
  m.add(3, 'days'); /* mは3日後になる */
  console.log(m.format()); // 2020-08-10T12:38:10+09:00
  m.subtract(2, 'years'); /* mは現在の3日後より2年前の日付になる */
  console.log(m.format()); // 2018-08-10T12:38:10+09:00

  m = moment(); /* リセット */
  m.startOf('year'); /* mは今年の1月1日になる */
  console.log(m.format()); // 2020-01-01T00:00:00+09:00
  m.endOf('month');   /* mは今年の1月31日になる */
  console.log(m.format()); // 2020-01-31T23:59:59+09:00
}

// メソッドを連鎖させる
{
  const moment = require('moment-timezone');
  console.log(moment().format()); // 2020-08-07T12:40:47+09:00
  const m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month'); /* mは10時間進んでから3日戻った日の月の末日になる */
  console.log(m.format()); // 2020-08-31T23:59:59+09:00
}

// 対象的な日時の利用
{
  const moment = require('moment-timezone');
  console.log(moment().fromNow()); // a few seconds ago
  console.log(moment().subtract(1, 'year').format()); // 2019-08-07T12:44:09+09:00
  console.log("=========");
  console.log(moment().subtract(10, 'seconds').fromNow()); // a few seconds ago
  console.log(moment().subtract(44, 'seconds').fromNow()); // a few seconds ago
  console.log(moment().subtract(45, 'seconds').fromNow()); // a minute ago
  console.log(moment().subtract(5, 'minutes').fromNow()); // 5 minutes ago
  console.log(moment().subtract(44, 'minutes').fromNow()); // 44 minutes ago
  console.log(moment().subtract(45, 'minutes').fromNow()); // an hour ago
  console.log(moment().subtract(5, 'hours').fromNow()); // 5 hours ago
  console.log(moment().subtract(21, 'hours').fromNow()); // 21 hours ago
  console.log(moment().subtract(22, 'hours').fromNow()); // a day ago
  console.log(moment().subtract(320, 'days').fromNow()); // 10 months ago
  console.log(moment().subtract(321, 'days').fromNow()); // a year ago
}