// キャンバスの中心に円を描画
$(document).ready(function () {
  "use strict";
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));
  let c = Shape.Circle(200, 200, 50);
  c.fillColor = "green";
  paper.view.draw();
});
