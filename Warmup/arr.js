var arrCompare = function (arr1, arr2){
  if (arr1.length === arr2.length){
    for (var i = 0; i < arr1.length; i ++){
      for (var k = 0; k < arr2.length; k ++){
        if (arr1[i] !== arr2[k]){
          return false;
        }else {
          return true;
        }
      }
    }
  } else {
    return false;
  }
}


console.log(arrCompare(["cat", "mouse", "hamster", 6], ["cat", "mouse", "hamster"]));
