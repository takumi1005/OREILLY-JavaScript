// グループの置換
{
  let chap2 = "第2章 初めてのJavaScriptアプリ\n"
        + "第1章では、JavaScriptの開発環境について説明しました。...\n"
        + "詳しくは第23章を参照してください。...\n"
        + "第3章では変数や定数について説明します。";
  chap2 = chap2.replace(/第(\d+)章/g, '$1章');
  console.log(chap2);

  /* 実行結果
  2章 初めてのJavaScriptアプリ
  1章では、JavaScriptの開発環境について説明しました。...
  詳しくは23章を参照してください。...
  3章では変数や定数について説明します。
  */
}

/* <a>タグからhref以外すべての属性を取り除く */
{
  let html = '<a class="abc" href="/www.xxx.yyy" id="lmn">xxxのサイト</a>';
  html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
  console.log(html); // <a href="/www.xxx.yyy">xxxのサイト</a>
}

// href属性とclass属性を記憶
{
  let html1 = `<a class='abc' id="s" href="/www.xx.yyy">サイトxx</a>`;
  r = html1.replace(/<a .*?(class=(["']).*?\2) .*?(href=(["']).*?\4).*?>/,
            '<a $3 $1>');
  console.log(r); // <a href="/www.xx.yyy" class='abc'>サイトxx</a>
}

// $$
{
  const input = "One two three";
  let r = input.replace(/two/, '($`)');
  console.log(r); // One (One ) three
  r = input.replace(/\w+/g, '($&)');
  console.log(r); // (One) (two) (three)
  r = input.replace(/two/, "($')");
  console.log(r); // One ( three) three
  r = input.replace(/two/, "($$)");
  console.log(r); // One ($) three
}