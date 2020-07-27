// map
{
  const cart = [ { 名前: "iPhone", 価格: 54800}, { 名前: "Android", 価格: 49800}];
  const names = cart.map(x => x.名前); // 各オブジェクトの「名前」からなる配列を新たに作る
  console.log(names); // [ 'iPhone', 'Android' ]
  const prices = cart.map(x => x.価格);
  console.log(prices); // [ 54800, 49800 ]
  const discountPrices = prices.map(x => x*0.8); // 2割引の価格
  console.log(discountPrices); // [ 43840, 39840 ]
  const lcNames = names.map(x => x.toLowerCase()); // 小文字にする
  // const lcNames = names.map(String.toLowerCase); 
  // ↑Firefoxではこれでも動くが、nodeやGoogle Chromeでは動作しない
  console.log(lcNames); // [ 'iphone', 'android' ]
}
{
  const items = ["iPhone", "Android"];
  const prices = [54800, 49800];
  const cart = items.map((x, i) => ({ 名前: x, 価格: prices[i]}));
  console.log(cart);
  // [ { '名前': 'iPhone', '価格': 54800 }, { '名前': 'Android', '価格': 49800 } ]
}

// filter
{
  const カードの束 = [];
  for(let マーク of ['ハート', 'クローバー', 'ダイア', 'スペード']) // 全カードを生成
    for(let 数字=1; 数字<=13; 数字++)
      カードの束.push({ マーク, 数字});

  let 選択されたカード = カードの束.filter(カード => カード.数字 === 2); 
  console.log(選択されたカード); // 2のカードのみ。次の4枚 
  /* [ { 'マーク': 'ハート', '数字': 2 },
    { 'マーク': 'クローバー', '数字': 2 },
    { 'マーク': 'ダイア', '数字': 2 },
    { 'マーク': 'スペード', '数字': 2 } ] */

  選択されたカード = カードの束.filter(カード => カード.マーク === 'ダイア');
  console.log(選択されたカード); // ダイアのカードのみ 13枚（以下詳細は省略）

  選択されたカード = カードの束.filter(カード => カード.数字 > 10);
  console.log(選択されたカード); // 絵札のみ（3×4=12枚）

  選択されたカード = カードの束.filter(カード => カード.数字 > 10 && カード.マーク === 'ハート'); 
  console.log(選択されたカード); // ハートの絵札のみ3枚
}

// mapとfilterの組み合わせ
{
  function 記号表現に変換する(カード) {
    const マーク名_絵文字 = { 'ハート': '♡', 'クローバー': '♧', 'ダイア': '♢', 'スペード': '♤' };
    const 数字からAJQK = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    for(let i=2; i<=10; i++) 数字からAJQK[i] = i;
    return マーク名_絵文字[カード.マーク]+数字からAJQK[カード.数字];
  }
  
  
  const カードの束 = [];
  for(let マーク of ['ハート', 'クローバー', 'ダイア', 'スペード']) // 全カードを生成
    for(let 数字=1; 数字<=13; 数字++)
      カードの束.push({ マーク, 数字});

  let 選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 === 2).map(記号表現に変換する);
  console.log(選択されたカード_記号表現); // [ '♡2', '♧2', '♢2', '♤2' ]

  選択されたカード_記号表現 = カードの束.filter(カード => カード.マーク === 'ダイア').map(記号表現に変換する);
  console.log(選択されたカード_記号表現);
  // [ '♢A', '♢2', '♢3', '♢4', '♢5', '♢6', '♢7', '♢8',
  //   '♢9', '♢10', '♢J', '♢Q',  '♢K' ]
  
  選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 > 10).map(記号表現に変換する);
  console.log(選択されたカード_記号表現);
  // [ '♡J', '♡Q', '♡K', '♧J', '♧Q', '♧K', '♢J', '♢Q',
  //   '♢K', '♤J', '♤Q', '♤K' ]
  
  選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 > 10 && カード.マーク === 'ハート').map(記号表現に変換する);
  console.log(選択されたカード_記号表現); // [ '♡J', '♡Q', '♡K' ]
}