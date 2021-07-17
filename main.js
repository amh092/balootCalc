
// declaring variables starts 
  
  //us variables
  var totalUs = document.getElementById("us-total");
  var inputUs = document.getElementById("us");

// Them calculation
  var totalThem = document.getElementById("them-total");
  var inputThem = document.getElementById("them");
// record btn
  var calcBtn = document.getElementById("calc");
// this function will get the data from us input filed and save it to currentForUs var //
  var usHistory = document.getElementById("history-them");
  var themHistory = document.getElementById("history-us");
// undo button 
  var undo = document.getElementsByTagName("svg")[0];
  // history variables 
  
  var textLast ;
  var last;
  var textLast2;
  var last2;
// declaring variables ends  

// this event listener will move the focus to other input field after user input any number higher than 9 
// them input field
  inputThem.addEventListener("input", function () {
      "use strict";
  if (inputThem.value.length >= 2) {
    if (inputUs.value == "") inputUs.focus();
  }
 });
// us input field
  inputUs.addEventListener("input", function () {
      "use strict";
  if (inputUs.value.length >= 2 ) {
    if (inputThem.value == "") inputThem.focus();
  }
  });
// end of event listener 

// btn click for counting 
calcBtn.addEventListener("click", function () {
    "use strict";
  // the if condition is to avoid not a number 
    if (inputThem.value == "") {
      inputThem.value = 0;
    }
    if (inputUs.value == "") {
      inputUs.value = 0;
    }
  // end if condition is to avoid not a number 

  // to add the sum to the us and them total after parse integers  
  totalUs.innerText = parseInt(inputUs.value) + parseInt(totalUs.innerText);
  totalThem.innerText = parseInt(inputThem.value) + parseInt(totalThem.innerText);

  if (inputUs.value > 0) {
      
    last = document.createElement("h1");
    textLast = document.createTextNode(parseInt(inputUs.value));
    last.appendChild(textLast);
    usHistory.appendChild(last);
  }

  else{
     last = document.createElement("h1");
     textLast = document.createTextNode(0);
    last.appendChild(textLast);
    usHistory.appendChild(last);
  }

  if (inputThem.value > 0) {
    last2 = document.createElement("h1");
     textLast2 = document.createTextNode(parseInt(inputThem.value));
    last2.appendChild(textLast2);
    themHistory.appendChild(last2);
  }

  else{
    last2 = document.createElement("h1");
    textLast2 = document.createTextNode(0);
    last2.appendChild(textLast2);
    themHistory.appendChild(last2);
  }

  if (inputThem.value == "") {
    inputThem.value = 0;
  }
  if (inputUs.value == "") {
    inputUs.value = 0;
  }
  inputUs.value = "";
  inputThem.value = "";

  if (usHistory.lastChild.innerText == 0 && themHistory < 0){

      usHistory.lastChild.remove();
  }
  if (themHistory.lastChild.innerText == 0 && usHistory < 0){

      themHistory.lastChild.remove();
  }

  if ( usHistory.lastChild.innerText == 0 && themHistory.lastChild.innerText == 0){
    themHistory.lastChild.remove();
    usHistory.lastChild.remove();
  }

 
  });
// undo the result section 

 undo.addEventListener("click", function(){
"use strict";
  if (totalThem.innerHTML > 0 || totalUs.innerHTML > 0 ) {
   // updating the result after undoing the result 
   totalThem.innerHTML = parseInt(totalThem.innerHTML) - parseInt(themHistory.lastChild.innerHTML);
   totalUs.innerHTML = parseInt(totalUs.innerHTML) - parseInt(usHistory.lastChild.innerHTML);
   
  if(totalUs.innerHTML == ""){
    totalUs.innerHTML = 0;
  }
  if(totalThem.innerHTML == ""){
    totalThem.innerHTML = 0;
  }

  if (themHistory.childElementCount > 0) {
   themHistory.lastChild.remove();}
   if( usHistory.childElementCount > 0 ) {
   usHistory.lastChild.remove();}
   }
 });

// new game 

var newGame =  document.getElementById("new");

newGame.addEventListener("click", function(){
  "use strict";
  totalThem.innerText = 0;
  totalUs.innerText = 0;

  inputThem.value = "";
  inputUs.value = "";

  if (usHistory.childElementCount > 0){
  while (usHistory.firstChild) {
    usHistory.removeChild(usHistory.firstChild);
  }}

  if (themHistory.childElementCount > 0) {
  while (themHistory.firstChild) {
    themHistory.removeChild(themHistory.firstChild);
  }
}
});

usHistory.addEventListener("click", function(){
  "use strict";
inputUs.focus();
});
themHistory.addEventListener("click", function(){
inputThem.focus();
});
