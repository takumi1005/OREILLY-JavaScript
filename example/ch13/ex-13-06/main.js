// 関数と変数

// 短い関数を使ってその関数の代わりに使う
{
  function addThreeSquareAddFiveTakeSquareRoot(x) {
    return Math.sqrt(Math.pow(x+3, 2)+5);
  }
  
  /* #1 */ 
  const answer1 = (addThreeSquareAddFiveTakeSquareRoot(5) +
    addThreeSquareAddFiveTakeSquareRoot(2)) / addThreeSquareAddFiveTakeSquareRoot(7);
  console.log(answer1); // 1.3451659672026264
  
  /* #2 */ 
  const f = addThreeSquareAddFiveTakeSquareRoot;
  const answer2 = (f(5) + f(2)) / f(7);
  console.log(answer2); // 1.3451659672026264
}

// 関数を配列に記憶
{
  const sin = Math.sin;
  const cos = Math.cos;
  const theta = Math.PI/4;
  const zoom = 2;
  const offset = [1, -3];

  /* pipelineに2D変換を行う関数を3つ記憶する */
  const pipeline = [ /* 関数を要素としてもつ配列 */
    function rotate(p) {
      return {
        x: p.x * cos(theta) - p.y * sin(theta),
        y: p.x * sin(theta) + p.y * cos(theta),
      };
    }, /* ここまでが pipeline[0] */

    function scale(p) {
      return { x: p.x * zoom, y: p.y * zoom };
    }, /* ここまでが pipeline[1] */

    function translate(p) {
      return { x: p.x + offset[0], y: p.y + offset[1] };
    }, /* ここまでが pipeline[2] */
  ];

  /* pを変換する */
  const p = { x: 1, y: 1 };
  console.log(p);
  let p2 = p;
  for(let i=0; i<pipeline.length; i++) {
    p2 = pipeline[i](p2);
    console.log(p2);
  }

  /* 実行結果
  { x: 1, y: 1 }
  { x: 1.1102230246251565e-16, y: 1.414213562373095 }
  { x: 2.220446049250313e-16, y: 2.82842712474619 }
  { x: 1.0000000000000002, y: -0.17157287525381015 }
  */
}

// 関数に関数を渡す
{
  function sum(arr, f) {
    /* fが指定されない場合は何もしない関数とする */
    if(typeof f != 'function') f = x => x;
    
    return arr.reduce((a, x) => a += f(x), 0); /* reduceは8章参照 */
  }
  console.log(sum([1, 2, 3])); // 6  (=1+2+3)
  console.log(sum([1, 2, 3], x => x*x)); // 14  (=1+4+9)
  console.log(sum([1, 2, 3], x => Math.pow(x, 3))); // 36  (=1+8+27)
}

// 関数から関数を返す
{
  function sum(arr, f) {
    /* fが指定されない場合は何もしない関数とする */
    if(typeof f != 'function') f = x => x;
    
    return arr.reduce((a, x) => a += f(x), 0); // reduceは8章参照
  }

  function newSummer(f) {
    return arr => sum(arr, f); /* fを使って合計を取る関数を返す */
  }

  const sumOfSquares = newSummer(x => x*x);
  const sumOfCubes = newSummer(x => Math.pow(x, 3));
  
  console.log(sumOfSquares([1, 2, 3])); // 14  （1+4+9）
  console.log(sumOfCubes([1, 2, 3])); // 36   （1+8+27）
}