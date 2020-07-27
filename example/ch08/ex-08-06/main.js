// 配列関係のメソッドに関する注意点
// 初期化がうまくいかない
{
  const arr = Array(10).map(function(x) {
    return 5
  });
  console.log(arr); // [ , , , , , , , , ,  ]
}

// 穴が空いてしまう
{
  const arr = [1, 2, 3, 4, 5];
  delete arr[2];
  console.log(arr); // [ 1, 2, , 4, 5 ]
  const result = arr.map(x => 0);
  console.log(result); // [ 0, 0, , 0, 0 ]
  console.log(result[2]); // undefined
}