// 行頭や行末とのマッチング
{
  const input = "It was the best of times, it was the worst of times";
  const beginning = input.match(/^\w+/);
  console.log(beginning[0]); // It
  const end = input.match(/\w+$/);
  console.log(end[0]); // times
  const everything = input.match(/^.*$/);  /* 文字列全体 */
  console.log(everything[0]); // It was the best of times, it was the worst of times
  const nomatch1 = input.match(/^best/i);
  console.log(nomatch1); // null
  const nomatch2 = input.match(/worst$/i);
  console.log(nomatch2); // null

  const input2 = "あの頃が最高だったな〜。まあ、あの頃は最悪でもあったな〜。";
  const beginning2 = input2.match(/^.*?[はが]/)
  console.log(beginning2[0]); // あの頃が
  const end2 = input2.match(/[^。]+。$/);
  console.log(end2[0]); // まあ、あの頃は最悪でもあったな〜。
}

{
  const input = "One line\nTwo lines\nThree lines\nFour";
  const beginnings = input.match(/^\w+/mg);
  console.log(beginnings); // [ 'One', 'Two', 'Three', 'Four' ]
  const endings = input.match(/\w+$/mg);
  console.log(endings); // [ 'line', 'lines', 'lines', 'Four' ]

  const input2 = "あの頃が最高だったな〜。\nあの頃は最悪でもあったな〜。\n"
                  + "あいつは元気かな〜。";
  const beginning2 = input2.match(/^.*?[はが]/mg);
  console.log(beginning2); // [ 'あの頃が', 'あの頃は', 'あいつは' ]
}