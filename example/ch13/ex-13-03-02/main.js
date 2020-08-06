// setInterval(function() { /* 500ミリ秒ごとに第1引数の関数を呼び出す */
//   document.querySelector('.rainbow').style['background-color'] = getNextRainbowColor();
// }, 500); /* 500が第2引数 */

// const getNextRainbowColor = (function() {
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let colorIndex = -1;
// return function() {
//   if(++colorIndex >= colors.length) colorIndex = 0;
//   return colors[colorIndex];
// };
// })();

// 上記を純粋関数に
const rainbowIterator = getRainbowIterator();
setInterval(function() {
  document.querySelector('.rainbow')
    .style['background-color'] = rainbowIterator.next().value;
}, 500);

function getRainbowIterator() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let colorIndex = -1;
  return {
    next() {
      if(++colorIndex >= colors.length) colorIndex = 0;
      console.log("in iterator: "+colors[colorIndex])
      return { value: colors[colorIndex], done: false };
    }
  };
}