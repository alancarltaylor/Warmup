// document.addEventListener("keydown", addBackgroundColor);
// document.addEventListener("mousedown", changeWidthHeight);
var btn = document.getElementById("btn");
btn.addEventListener('mousedown', btnClick);

function btnClick(){
  var newH1 = document.createElement("h1");
  var newH3 = document.createElement("h3");
  divTarget.style.backgroundColor = "blue";
  divTarget.appendChild(newH1);
  newH1.innerText = "This is the title";

  divTarget.appendChild(newH3);
  newH3.innerText = document.getElementById("textarea").value;


}


// function addBackgroundColor(){
//   var divTarget = document.getElementsByTagName("div")[0];
//   divTarget.style.backgroundColor = "green";
// };
//
// function changeWidthHeight(){
//   var divTarget = document.getElementsByTagName("div")[0];
//   divTarget.style.height = "500px";
//   divTarget.style.width = "300px";
//
// };
