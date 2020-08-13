// 文字集合
{
  const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";
  const m1 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
  console.log(m1); // [ '9', '9', '1', '9', '8' ]
  // 簡略化
  const m2 = beer99.match(/[0-9]/g); /* 範囲の指定。このほうが簡潔 */
  console.log(m2); // [ '9', '9', '1', '9', '8' ]

  const m3 = beer99.match(/[0-9a-z\-.]/ig);
  console.log(m3); // [ '9', '9', 'b', 'o', 〈中略〉 'w', 'a', 'l', 'l', '.' ]
  const m4 = beer99.match(/[-0-9a-z.]/ig); /* （「-」は先頭に書くとエスケープ不要） */
  const m5 = beer99.match(/[a-z.0-9-]/ig); /* （「-」は末尾に書いてもエスケープ不要）*/

  /* m3, m4, m5を比較。配列の内容を比較するために、JSON文字列に変換して比較 */
  const m3String = JSON.stringify(m3);
  const m4String = JSON.stringify(m4);
  const m5String = JSON.stringify(m5);
  console.log(m3String); // ["9","9","b","o", 〈中略〉 "w","a","l","l","."]
  console.log(m3String===m4String); // true  （JSON文字列で比較）
  console.log(m3String===m5String); // true
}

// 対象としない文字の集合を指定
{
  const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";
  const match = beer99.match(/[^ 0-9a-z]/g); /* 英数字でもスペースでもないものにマッチ */
  console.log(match); // [ '-', '-', '.' ]

  const beer99j = "99本のビンが、壁に並んでいます。" +
    "1本取って渡しました。" +
    "98本のビンが、壁に並んでいます。";
  const match2 = beer99j.match(/[^0-9ァ-ヴぁ-ん。、]+/g);
  console.log(match2); // [ '本', '壁', '並', '本取', '渡', '本', '壁', '並' ]
}

// 文字記号の略記法
{
  const 入力 = "８月３０日ＭＡＺ昨年四月三〇日。"
  let マッチ = 入力.match(/[０-９]/g); /* 全角の０〜９ */
  console.log(マッチ); // [ '８', '３', '０' ]
  マッチ = 入力.match(/[０-９]/); /* 全角の０〜９。gオプションなし */
  console.log(マッチ); // [ '８', index: 0, input: '８月３０日ＭＡＺ昨年四月三〇日。' ]

  マッチ = 入力.match(/[Ａ-Ｚ]/g);
  console.log(マッチ); // [ 'Ｍ', 'Ａ', 'Ｚ' ]

  マッチ = 入力.match(/[〇一二三四五六七八九＋]/g); /* [一-九]のようには指定できない */
  console.log(マッチ); // [ '四', '三', '〇' ]

  マッチ = 入力.match(/[年月日]/g);
  console.log(マッチ); // [ '月', '日', '年', '月', '日' ]
}