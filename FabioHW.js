

function lifesMeaning(){
  var phrases = [
    "f",
    "s",
    "g",
    "k",
    "w",
    "n"
  ]
  var randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];
  if (arguments[0]===42){

    return "code like a champion";
  }
  else {
    return randomPhrase;
  }

};
console.log(lifesMeaning(41));
function sumMagic(){
 var myArray = Array.prototype.slice.call(arguments);
 var mySum = 0;
 var isNum = 0;

  for (var i = 0; i < myArray.length; i ++){
    //isNum = parseInt(myArray[i])
    if ((isNum = parseInt(myArray[i]))&&(typeof isNum === "number")){
    mySum += isNum;
    }

  }
if ((mySum !== 21)&&(mySum !== 0)){
 return mySum;
 }
 else if (mySum === 21){
   return "Blackjack!";
 }
 else {
   return "Nothing to add here";
 }
};

console.log(sumMagic('4002', 'igloo', 2, '5'));
function WhatIsTheKeyToSuccess(n){
  for (n; n > 1; n--){

    console.log("Another one!");

    }
    console.log("I am DJ Khaled");

};

setTimeout(WhatIsTheKeyToSuccess(4), 10000);
