// 日時の受け渡し
{
  const before = { d: new Date() };
  console.log(before.d); // 2020-08-07T03:06:05.238Z
  console.log(before.d instanceof Date); // true
  const json = JSON.stringify(before); // 文字列に変換
  console.log(json); // {"d":"2020-08-07T03:06:05.238Z"}
  const after = JSON.parse(json);
  console.log(after.d instanceof Date) // false
  console.log(typeof after.d) // string

  console.log(after.d); // 2020-08-07T03:06:05.238Z
  after.d = new Date(after.d);
  console.log(after.d instanceof Date) // true
  console.log(after.d) // 2020-08-07T03:06:05.238Z
}

// もう一つの方法
{
  const before = { d: new Date().valueOf() };
  console.log(before.d); // 1596769688522  （UNIXエポックからのミリ秒数）
  console.log(typeof before.d); // number
  const json = JSON.stringify(before);
  console.log(json) // {"d":1596769688522}
  const after = JSON.parse(json);
  console.log(after) // { d: 1596769688522 }
  console.log(typeof after.d)  // number
  const d = new Date(after.d);
  console.log(d); // 2020-08-07T03:08:08.522Z
}