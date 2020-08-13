// 英単語の境界マッチング
{
  const inputs = [
    "john@doe.com", /* メールアドレスのみ */
    "john@doe.com is my email", /* 先頭 */
    "my email is john@doe.com", /* 末尾 */
    "use john@doe.com, my email", /* 中間 */
    "my email:john@doe.com.",
  ];

  const emailMatcher =
    /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
  const r = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
  console.log(r);

  /* 実行結果
  [ '<a href="mailto:john@doe.com">john@doe.com</a>',
    '<a href="mailto:john@doe.com">john@doe.com</a> is my email',
    'my email is <a href="mailto:john@doe.com">john@doe.com</a>',
    'use <a href="mailto:john@doe.com">john@doe.com</a>, my email',
    'my email:<a href="mailto:john@doe.com">john@doe.com</a>.' ]
  */
}

// 先読み
{
  function validPassword(p) {
    return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])^[a-zA-Z0-9]+$/.test(p);
  }
  
  console.log(validPassword("aiueo")); // false
  console.log(validPassword("3aiuEo")); // true
  console.log(validPassword("traveLer2")); // true
  console.log(validPassword("日本語3aB")); // false
  console.log(validPassword("Pocke3")); // true
  console.log(validPassword("Pocké3")); // false
}

// 正規表現の動的な表現
{
  const users = ["mary", "nick", "arthur", "sam", "yvette"];
  const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
  console.log(userRegex); // /@(?:mary|nick|arthur|sam|yvette)\b/g
  /* 「?:」（キャプチャなしのグループの指定）はなくても結果は同じだが、少し効率がよい */

  const text = "User @arthur started the backup and 15:15, " +
        "and @nick and @yvette restored it at 18:35.";
  console.log(text.match(userRegex)); // [ "@arthur", "@nick", "@yvette" ]


  const users2 = ["浦島太郎", "一寸法師", "桃太郎", "金太郎", "かぐや姫"];
  const userRegex2 = new RegExp(`(?:${users2.join('|')})`, 'g');
  console.log(userRegex2); // /(?:浦島太郎|一寸法師|桃太郎|金太郎|かぐや姫)/g

  const text2 = "浦島太郎がバックアップを開始（15:15）\n" +
                "かぐや姫と金太郎がリストア（18:35）\n";
  console.log(text2.match(userRegex2)); // [ '浦島太郎', 'かぐや姫', '金太郎' ]
}