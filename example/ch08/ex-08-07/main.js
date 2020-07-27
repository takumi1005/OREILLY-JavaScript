// join
{
  const arr = [1, null, "hello", "world", true, undefined];
  delete arr[3];
  let result = arr.join();
  console.log(result); // 1,,hello,,true
  result = arr.join('');
  console.log(result); // 1hellotrue
  result = arr.join(' -- ');
  console.log(result); // 1 -- -- hello -- -- true --
}

// joinを使ってulリストを作成
{
  const お供 = ["キジ", "犬", "サル"];
  const html = '<ul><li>' + お供.join('</li><li>') + '</li></ul>';
  console.log(html); // <ul><li>キジ</li><li>犬</li><li>サル</li></ul>
}