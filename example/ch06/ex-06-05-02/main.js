// const o = {
//   name: 'Julia',
//   greetBackwards: function() {
//     function getReverseName() {
//       let nameBackwards = "";
//       for(let i = this.name.length-1; i >= 0; i--) {
//         nameBackwards += this.name[i];
//       }
//       return nameBackwards;
//     }
//     return `${getReverseName()} si eman ym ,olloH`;
//   },
// };
// console.log(o.greetBackwards());

const o = {
  name: 'Julie',
  greetBackwards: function() {
    const self = this; // thisを覚えておく

    function getReverseName() {
      let nameBackwards = '';
      for(let i = self.name.length-1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    } // getReverseNameの定義の終わり

    return `${getReverseName()} si eman ym ,olleH`;
  },
};
console.log(o.greetBackwards());