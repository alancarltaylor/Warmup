function whoIsCooler(me, you){
  return me;
}

console.log(whoIsCooler("Jerry", "Lucille"));

function isString(a, b, c){
  if ((typeof a === 'string')&&(typeof b === 'string')&&(typeof c === 'string')){
    return true;
  }else{
    return false;
  }
}

console.log(isString("Jerry", 3 , "Jason"));

function numMagic(number){
  function isEven(number){
    if (number % 2 === 0){
      return true;
    } else {
      return false;
    }
  };
   if (isEven(number) === true){
     return number * 2;
  }
  else {
    return number * 3;
  }

};
console.log(numMagic(200));

function numMagic(number){
  function isEven(number){
    if (number % 2 === 0){
      return true;
    }
    else {
      return false;
    }
  };
  function isOdd(number){
    if (number % 2 === 1){
      return true;
    }
    else {
      return false;
    }
  };

  if (isEven(number)){
    return number * 2;
  }
  else if (isOdd(number)){
    return number * 3;
  }
  else {
    return "That's not a number";
  }

};
console.log(numMagic("Jerry"));
