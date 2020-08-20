// Firefoxで実行すると、変化の様子が見られる
$(function () {
  alert("OKを押すと操作が行われます");
  $("p").after("<hr>").not(".highlight").css("margin-left", "5cm");
});
