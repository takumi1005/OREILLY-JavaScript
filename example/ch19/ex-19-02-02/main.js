// Firefoxで実行すると、変化の様子が見られる
$(function () {
  alert("OKを押すと操作が行われます（*の追加）");
  $("p").append("<sup>*</sup>");

  alert("OKを押すと操作が行われます（横線の追加）");
  $("p").after("<hr>").before("<hr>");
});
