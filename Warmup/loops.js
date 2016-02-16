//   var examples = [
//   typeof Array,
//   typeof [],
//   typeof 'Buffs',
//   18 + 18,
//   5*'Go fish',
//   'friend are alive',
//   '88' + 99,
//   {a: 1, b: 2} instanceof Array,
//   typeof 37
// ]
//
// examples.forEach(function printScreen(value){
//   console.log(value);
// });
var backwardsStrings = ['looc', 'os', 'si', 'siht'];

function reverseArray (array){
  var result = "";
  for (var i = (array.length - 1); i > -1; i --){

    var words = array[i].split("").reverse().join("") + " ";
    result += words;
};

    return result;
};

console.log(reverseArray(backwardsStrings));
