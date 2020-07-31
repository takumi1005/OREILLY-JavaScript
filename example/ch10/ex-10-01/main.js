// Map
const u1 = { name: "和洋" };
const u2 = { name: "花子" };
const u3 = { name: "涼子" };
const u4 = { name: "哲人" };
// マップの生成
const userRoles = new Map();
// setで役割の対応付
userRoles
  .set(u1, "ユーザー")
  .set(u2, "ユーザー")
  .set(u3, "管理者");

// コンストラクタに配列の配列を渡してマップを初期化
  {
    const userRoles = new Map([
      [u1, 'ユーザー'],
      [u2, 'ユーザー'],
      [u3, '管理者'],
    ]);
    console.log(userRoles.get(u2)); // ユーザー

    // hasを使ってマップにキーが含まれているかチェック
    console.log(userRoles.has(u1)); // true
    console.log(userRoles.get(u1)); // ユーザー
    console.log(userRoles.has(u4)); // false
    console.log(userRoles.get(u4)); // undefined

    // 存在しているキーにsetを使って置き換え
    console.log(userRoles.get(u1)); // ユーザー
    userRoles.set(u1, '管理者');
    console.log(userRoles.get(u1)); // 管理者

    // sizeを使って何組あるか調べる
    console.log(userRoles.size); // 3

    // keysですべてのキーを取得
    for(let u of userRoles.keys())
      console.log(u.name); // 和洋\n花子\n涼子

    // valuesを使ってすべての値を取得
    for(let r of userRoles.values())
      console.log(r); // 管理者\nユーザー\n管理者

    // entriesを使ってすべてのエントリ(対応関係)を取得
    for(let ur of userRoles.entries())
      console.log(`${ur[0].name}: ${ur[1]}`);//和洋: 管理者\n花子: ユーザー\n涼子: 管理者

    for(let [u, r] of userRoles.entries()) /* デストラクチャリングを使ったほうが自然 */
      console.log(`${u.name}: ${r}`); // 和洋: 管理者\n花子: ユーザー\n涼子: 管理者
    
    // entriesはMapのデフォルトイテレータなので、次のように短くできる
    for(let [u, r] of userRoles)
      console.log(`${u.name}: ${r}`); // 和洋: 管理者\n花子: ユーザー\n涼子: 管理者

    // 配列が欲しい場合はスプレッド演算子を使用
    console.log(userRoles.values()); // MapIterator { '管理者', 'ユーザー', '管理者' }
    console.log([...userRoles.values()]); // [ '管理者', 'ユーザー', '管理者' ]

    // マップから一つの要素を削除
    userRoles.delete(u2);
    console.log(userRoles.size); // 2
    console.log([...userRoles.values()]); // [ '管理者', '管理者' ]

    // マップからすべての要素を削除
    userRoles.clear();
    console.log(userRoles.size); // 0
    console.log([...userRoles.values()]); // []
  }