const { indexOf, lastIndexOf, findIndex } = require("underscore");

// indexOf,lastIndexOf
{
  const o = { name: "ジェリー" };
  const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
  
  console.log(arr.indexOf(5)); // 1
  console.log(arr.lastIndexOf(5)); // 5
  console.log(arr.indexOf("a")); // 2
  console.log(arr.lastIndexOf("a")); // 2
  console.log(arr.indexOf({ name: "ジェリー" })); // -1
  console.log(arr.indexOf(o)); // 3
  console.log(arr.indexOf([1, 2])); // -1
  console.log(arr.indexOf("9")); // 7
  console.log(arr.indexOf(9)); // -1
  
  console.log(arr.indexOf("a", 5)); // -1  （"a"をarr[5]から検索する）
  console.log(arr.indexOf(5, 5)); // 5
  console.log(arr.lastIndexOf(5, 4)); // 1   （arr[4]から左に探す）
  console.log(arr.lastIndexOf(true, 3)); // -1  （arr[3]から左に探してもない）
  console.log('-------');
  // findIndex
  {
  const arr = [{ id: 5, name: "太郎" }, { id: 7, name: "花子" }];
  console.log(arr.findIndex(o => o.id === 5)); // 0  ←idが5ならば条件にマッチ
  console.log(arr.findIndex(o => o.name === "花子")); // 1
  console.log(arr.findIndex(o => o === 3)); // -1
  console.log(arr.findIndex(o => o.id === 17)); // -1
  console.log(arr.findIndex(o => o.id === 7)); // 1
  }
  console.log('-------');
  // find
  {
    const arr = [{ id: 5, name: "太郎" }, { id: 7, name: "花子" }];
    console.log(arr.find(o => o.id === 5)); // { id: 5, name: '太郎' }
    console.log(arr.find(o => o.id === 2)); // undefined
  }
  console.log('-------');
  {
    const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
    console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)))); // 4
    /* 添字（第2引数）が2より大きくて、ルートを取った値が整数になる */
    console.log(arr.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x)))); // 49
  }
}
