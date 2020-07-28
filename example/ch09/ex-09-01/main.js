// for...in
{
  const SYM = Symbol();
  const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
  for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
  }
  /*  実行結果 （キーがシンボルであるプロパティはリストされない）
  a: 1
  b: 2
  c: 3
  */
  const o2 = { a: 1, b: 2, c: 3, SYM:4};
  console.log(o2.SYM); // 4
  console.log(o2["SYM"]); // 4
  console.log(o2[SYM]); // undefined

  const o3 = { a: 1, b: 2, c: 3};
  o3[SYM] = 4;
  console.log(o3.SYM); // undefined
  console.log(o3["SYM"]); // undefined
  console.log(o3[SYM]); // 4
}
// Object.keys
{
  const SYM = Symbol();
  const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
  const propArray = Object.keys(o);
  console.log(propArray);
  console.log("------");
  propArray.forEach(prop => console.log(`${prop}: ${o[prop]}`));

  /* 実行結果
  [ 'a', 'b', 'c' ]
  ------
  a: 1
  b: 2
  c: 3
  */
}

{
  const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };
  Object.keys(o)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${o[prop]}`));
  /* 実行結果
  xochitl: 2
  xylophone: 5
  */
}