// reduce使用例
{
  const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
  const stats = data.reduce((a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta/a.N;
    a.M2 += delta*(x - a.mean);
    return a;
  }, { N: 0, mean: 0, M2: 0 });
  if(stats.N > 2) {
    stats.variance = stats.M2 / (stats.N - 1);
    stats.stdev = Math.sqrt(stats.variance);
  }
  console.log(stats);
  /*　結果
  { N: 7,
    mean: 6.828571428571428,
    M2: 63.41428571428572,
    variance: 10.56904761904762,
    stdev: 3.2510071699471257 }  
  */
}

{
  const words = ["Beachball", "Rodeo", "Angel",
                "Aardvark", "Xylophone", "November", "Chocolate",
                "Papaya", "Uniform", "Joker", "Clover", "Bali"];
  const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
  console.log(longWords); // Beachball Aardvark Xylophone November Chocolate Uniform

  const 単語リスト = ["ビーチボール", "ルービックキューブ", "ブタペスト", "トロッコ",
                      "コンゴ", "ゴースト", "トーラス", "スマート", "トンガ",
                      "ガラパゴス", "ストリート", "トーマス", "ストレッチ",
                      "チベット", "トキ", "キツツキ", "キリン"];
  const 長い単語 = 単語リスト.reduce((a, w) => w.length>=5 ? a+" "+w : a, "").trim();
  console.log(長い単語);
  // ビーチボール ルービックキューブ ブタペスト ガラパゴス ストリート ストレッチ
}