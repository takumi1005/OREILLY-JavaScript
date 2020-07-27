// クラスとインスタンスの生成
{
  class Car {
    constructor() {
    }
  }
  const car1 = new Car();
  const car2 = new Car();
  console.log(car1 instanceof Car) // true
  console.log(car2 instanceof Car) // true
  console.log(car1 instanceof Array) // false
}
// 属性とメソッドを追加
{
  class Car {
    constructor(make, model) {
      this.make = make; // メーカー
      this.model = model; // モデル
      this.userGears = ['P', 'N', 'R', 'D'];
      this.userGear = this.userGears[0];
    }
    shift(gear) {
      if(this.userGears.indexOf(gear) < 0) /* 例外の処理 */
        throw new Error(`ギア指定が正しくない: ${gear}`);/*例外をスローしてエラーを示す*/
      this.userGear = gear;
    }
  }
  const car1 = new Car("Tesla", "Model S");
  const car2 = new Car("Mazda", "3i");
  console.log(car1);
  /* 実行結果
  Car {
    make: 'Tesla',
    model: 'Model S',
    userGears: [ 'P', 'N', 'R', 'D' ],
    userGear: 'P' }
  */

  console.log(car2);
  /*
  Car {
    make: 'Mazda',
    model: '3i',
    userGears: [ 'P', 'N', 'R', 'D' ],
    userGear: 'P' }
  */
  car1.shift('D');
  car2.shift('R');
  console.log(car1.userGear); // D
  console.log(car2.userGear); // R
}