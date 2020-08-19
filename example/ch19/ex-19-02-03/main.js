// Firefoxで実行すると、変化の様子が見られる
$(function () {
  alert("OKを押すと操作が行われます（前の例と同じ3つの操作）");
  $("<sup>*</sup>").appendTo("p"); // $('p').append('<sup>*</sup>')　と同じ
  $("<hr>").insertBefore("p"); // $('p').before('<hr>')　と同じ
  $("<hr>").insertAfter("p"); // $('p').after('<hr>')　と同じ
  alert("OKを押すと操作が行われます（偶数番目の段落を赤字に）");
  $("p:odd").css("color", "red");
});
