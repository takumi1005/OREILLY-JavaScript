// サーバーにおける日時の生成
{
  const d = new Date(Date.UTC(2017, 1, 14)); /* 2017年2月14日UTC */
  console.log(d); // 2017-02-14T00:00:00.000Z
}

// moment.jsを利用
{
  const moment = require('moment-timezone');
  const d = moment.tz([2017, 3, 27, 11, 30], 'Asia/Tokyo').toDate();
  console.log(d); //27T02:30:00.000Z   （UTCの時刻 dはDateオブジェクト）
}