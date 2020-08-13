// 繰り返し
{
  const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";
  const matches = beer99.match(/[0-9]+/g);
  console.log(matches); // [ '99', '1', '98' ]
}

// メタ文字「.」とエスケープ
{
  const input = "Address: 333 Main St., Anywhere, NY, 55532.  Phone: 555-555-2525.";
  const match = input.match(/.*\d{5}/);
  console.log(match[0]); // Address: 333 Main St., Anywhere, NY, 55532

  const equation = "(2 + 3.5) * 7";
  const match2 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
  console.log(match2[0]); // (2 + 3.5) * 7

  // ワイルドカード
  const beer99 = "99 bottles of beer on the wall \n" +
    "take 1 down and pass it around -- \n" +
    "98 bottles of beer on the wall.\n";
  const match3 = beer99.match(/[\s\S]*/);
  console.log(match3[0] === beer99); // true
}

// グループ化
{
  const text = "Visit oreilly.com today!";
  const match = text.match(/[a-z0-9]+(?:\.com|\.org|\.edu)/ig);
  console.log(match); // [ 'oreilly.com' ]

  const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
    '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
    '<link rel="stylesheet" href="//anything.com/flexible.css">';
  const matches = html.match(/(?:https?:)?\/\/[a-z0-9][a-z0-9.-]+[a-z0-9]+/ig);
  console.log(matches); 
    // [ 'http://insecure.com', 'https://secure.com', '//anything.com' ]
}

// 最長マッチ、最短マッチ
{
  const input = "Regex pros know the difference between\n" +
    "<i>greedy</i> and <i>lazy</i> matching.";
  const output = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
  console.log(output);
  /* 実行結果
  Regex pros know the difference between
  <strong>greedy</i> and <i>lazy</strong> matching.
  */
  console.log("==========");
  const output2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
  console.log(output2);
  /* 実行結果
  Regex pros know the difference between
  <strong>greedy</strong> and <strong>lazy</strong> matching.
  */
}

// 後方参照
{
  const html = `<img alt='A "simple" example.'>` +
                `<img alt="Don't abuse it!">`;
  const imageTags = html.match(/<img alt=(['"]).*?\1>/g);
  for (let i=0; imageTags && i<imageTags.length; i++) {
    console.log(imageTags[i]);
  }

  /* 実行結果
  <img alt='A "simple" example.'>
  <img alt="Don't abuse it!">
  */
}