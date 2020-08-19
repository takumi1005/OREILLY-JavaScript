$(function () {
  const para2 = $("p").get(1); // 2番目の<p> （0から始まる）
  console.log(`2番目の段落=${para2.innerHTML}`);

  console.log("========================");

  const paras = $("p").get(); // すべての<p>要素からなる配列
  for (let i = 0; i < paras.length; i++) {
    console.log(`${i + 1}番目の段落=${paras[i].innerHTML}`);
  }
});
