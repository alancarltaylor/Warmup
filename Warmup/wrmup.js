var thingsToday = ["rode my bike", "ate breakfast", "woke up", "drank lots of coffee", "took a shower"]

// function LoopdyDo(myArray){
//   var myString = "This morning I "
//   for (var i = 0; i < myArray.length; i ++){
//     console.log(myString + myArray[i]);
//   }
// }

function longestString(myArray){
  var longestOne = ""
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i].length > longestOne.length){
      longestOne = myArray[i]
      }

  }
  return "{" + longestOne + ", " + longestOne.length + "}";

}

//LoopdyDo(thingsToday);
console.log(longestString(thingsToday));
