// ブロックスコープ
{
  console.log('ブロックの前');
  {
    console.log('ブロック内');
    const x = 3;
    console.log(x);
  }
  // console.log(`ブロックの外。x＝${x}`); //エラーになる
}
/* 実行結果
ブロックの前
ブロック内
3
ReferenceError: x is not defined←エラーが起こる
*/
console.log('------');
// 変数の隠蔽
{
  { /* ブロック1 */
    const x = '青';
    console.log(x); // "青"
  }
  console.log(typeof x); // undefined  （スコープから外れているので、型はundefined）
  { /* ブロック2 */
    const x = 3;
    console.log(x); // 3
  }
  console.log(typeof x); // undefined
}
console.log('------');
// スコープが入れ子になった場合
{
  { /* 外側のブロックの始まり */
    let x = '青';
    console.log(x); // 青
    { /* 内側のブロックの始まり */
      let x = 3;
      console.log(x); // 3
    } /* 内側のブロックの終わり */
    console.log(x); // 青
  } /* 外側のブロックの終わり */
  console.log(typeof x); // undefined （型はundefined。スコープから外れている）
}
console.log('------')
// 変数のマスキング
{
  { /* 外側のブロックの始まり */
    let x = { color: "青" };
    let y = x; /* yとxが同じオブジェクトを参照する */
    let z = 3;
    { /* 内側のブロックの始まり */
      let x = 5; /* 外側のxが「マスク」される（隠されてしまう） */
      console.log(x); // 5
      console.log(y.color); // 青  （yによって参照されているオブジェクトは相変わらずスコープに入っている。外側のブロックのxもスコープには入っている）
      y.color = "赤";
      console.log(z); // 3   （zはマスクされていない）
    } /* 内側のブロックの終わり */
    console.log(x.color); // 赤  （内側のスコープでオブジェクトに変更がなされた）
    console.log(y.color); // 赤  （xとyは同じオブジェクトを参照している）
    console.log(z); // 3
  } /* 外側のブロックの終わり */
}

