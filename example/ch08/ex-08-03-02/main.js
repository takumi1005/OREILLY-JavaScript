{
  class Person {
    constructor(name) {
      this.name = name;
      this.id = Person.nextId++;
    }
  }
  Person.nextId = 0;
  const 一郎 = new Person("一郎"), /* id 0 */
        次郎 = new Person("次郎"), /* id 1 */
        三郎 = new Person("三郎"), /* id 2 */
        四郎 = new Person("四郎"); /* id 3 */
  const arr = [一郎, 次郎, 三郎, 四郎];
  
  /* 1. IDを使って直接比較 */
  console.log(arr.find(p => p.id === 三郎.id)); // Person { name: '三郎', id: 2 }
  /* 2. thisを利用。thisを定数「三郎」に指定 */
  console.log(arr.find(function(p) {return p.id === this.id}, 三郎));
                                                // Person { name: '三郎', id: 2 }
  /* アロー関数ではthisは「語彙的に（lexically）」に束縛される */
  console.log(arr.find(p => p.id === this.id, 三郎)); // undefined
}

// some
{
  const arr = [5, 7, 12, 15, 17];
  console.log(arr.some(x => x%2===0)); // true   （12は偶数）
  console.log(arr.some(x => Number.isInteger(Math.sqrt(x)))); // false
}

// every
{
  const arr = [4, 6, 16, 36];
  console.log(arr.every(x => x%2===0)); // true  （すべてが偶数）
  console.log(arr.every(x => Number.isInteger(Math.sqrt(x)))); // false  （6は整数の2乗ではない）
}