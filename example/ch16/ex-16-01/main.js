// 小数点以下の桁数を表示したい場合
{
  const x = 19.51;
  console.log(x.toFixed(3)); // 19.510
  console.log(x.toFixed(2)); //19.51
  console.log(x.toFixed(1)); //19.5
  console.log(x.toFixed(0)); //20
}

// 数を指数表現で表示したい場合
{
  const x = 3800.5;
  console.log(x.toExponential(4)); // 3.8005e+3
  console.log(x.toExponential(3)); // 3.801e+3
  console.log(x.toExponential(2)); // 3.80e+3
  console.log(x.toExponential(1)); // 3.8e+3
  console.log(x.toExponential(0)); // 4e+3
}

// 全体の桁数を指定したい場合
{
  let x = 1000;
  console.log(x.toPrecision(5)); // 1000.0
  console.log(x.toPrecision(4)); // 1000
  console.log(x.toPrecision(3)); // 1.00e+3
  console.log(x.toPrecision(2)); // 1.0e+3
  console.log(x.toPrecision(1)); // 1e+3
  x = 15.335;
  console.log(x.toPrecision(6)); // 15.3350
  console.log(x.toPrecision(5)); // 15.335
  console.log(x.toPrecision(4)); // 15.34
  console.log(x.toPrecision(3)); // 15.3
  console.log(x.toPrecision(2)); // 15
  console.log(x.toPrecision(1)); // 2e+1
}

// 数値の基数を指定したい場合
{
  const x = 12;
  console.log(x.toString()); // 12   （10進法）
  console.log(x.toString(10)); // 12   （10進法）
  console.log(x.toString(16)); // c   （16進法）
  console.log(x.toString(8)); // 14   （8進法）
  console.log(x.toString(2)); // 1100   （2進法）
}