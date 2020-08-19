$(function () {
  const $newPara = $("<p>新しく生成した段落...</p>");

  alert("まず現在の表示を確認してください。OKを押すと置換が行われます");
  $("p").text("すべての段落が、この文字列に置換されました");

  alert("OKを押すと置換が行われます（「すべての」の色が赤になります）");
  $("p").html('<span style="color: red">すべての</span>段落が置換されました');

  alert("OKを押すと置換が行われます（3番目の段落を置換）");
  $("p") // すべての段落にマッチ
    .eq(2) // 3番目の段落（0から数えて3つ目）
    .html("<b>3番目</b>の段落が置換されました");

  alert("OKを押すと置換が行われます（<p>...</p>をすべて削除）");
  $("p").remove();
});