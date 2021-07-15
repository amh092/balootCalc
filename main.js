"use strict";
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
// declaring variables ends  

// this event listener will move the focus to other input field after user input any number higher than 9 
  // them input field
    inputThem.addEventListener("input", function () {
    if (inputThem.value > 9) {
      if (inputUs.value == "") inputUs.focus();
    }
   });
  // us input field
    inputUs.addEventListener("input", function () {
    if (inputUs.value > 9) {
      if (inputThem.value == "") inputThem.focus();
    }
    });
// end of event listener 

// btn click for counting 
  calcBtn.addEventListener("click", function () {
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
      var last = document.createElement("h1");
      var textLast = document.createTextNode(parseInt(inputUs.value));
      last.appendChild(textLast);
      usHistory.appendChild(last);
    }

    else{
      var last = document.createElement("h1");
      var textLast = document.createTextNode(0);
      last.appendChild(textLast);
      usHistory.appendChild(last);
    }

    if (inputThem.value > 0) {
      var last2 = document.createElement("h1");
      var textLast2 = document.createTextNode(parseInt(inputThem.value));
      last2.appendChild(textLast2);
      themHistory.appendChild(last2);
    }

    else{
      var last2 = document.createElement("h1");
      var textLast2 = document.createTextNode(0);
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

        usHistory.lastChild.remove()
    }
    if (themHistory.lastChild.innerText == 0 && usHistory < 0){

        themHistory.lastChild.remove()
    }

    if ( usHistory.lastChild.innerText == 0 && themHistory.lastChild.innerText == 0){
      themHistory.lastChild.remove()
      usHistory.lastChild.remove()
    }

    });
// undo the result section 

   undo.addEventListener("click", function(){

    if (totalThem.innerHTML > 0 || totalUs.innerHTML > 0 ) {
     // updating the result after undoing the result 
     totalThem.innerHTML = parseInt(totalThem.innerHTML) - parseInt(themHistory.lastChild.innerHTML);
     totalUs.innerHTML = parseInt(totalUs.innerHTML) - parseInt(usHistory.lastChild.innerHTML);
     
    if(totalUs.innerHTML == ""){
      totalUs.innerHTML == 0
    }
    if(totalThem.innerHTML == ""){
      totalThem.innerHTML == 0
    }

    if (themHistory.childElementCount > 0) {
     themHistory.lastChild.remove();}
     if( usHistory.childElementCount > 0 ) {
     usHistory.lastChild.remove();}
     }
   })

// new game 

var newGame =  document.getElementById("new");

newGame.addEventListener("click", function(){

    location.reload();
})

usHistory.addEventListener("click", function(){
  inputUs.focus()
})
themHistory.addEventListener("click", function(){
  inputThem.focus()
})
/** switch button  */
// var switchBtn = document.querySelector("button");
// var bodyTag = document.querySelectorAll("body");
// var boxes = document.querySelectorAll(".box");
// var todayBoxes = document.querySelectorAll(".today-box");
// var midH1 = document.querySelectorAll(".black-text")
// var firstContainer = document.querySelector(".first-container")
// var buttonSpan = document.querySelector("button span")
// var overView = document.querySelector(".overview")
// var coder = document.querySelectorAll(".coder");

// toggling dark mode on and off based on button clicking

// switchBtn.addEventListener("click", function () {
//     for(i =0; i < coder.length; i = i +1){
//         coder[i].classList.toggle("coder-name-blue")
//         coder[i].classList.toggle("coder-name-white")
//     }

//     bodyTag[0].classList.toggle("background-black");
//     bodyTag[0].classList.toggle("white-text");
//     switchBtn.classList.toggle("switch-btn");
//     firstContainer.classList.toggle("dark-mode");
//     buttonSpan.classList.toggle("mode-switch-light")
//     buttonSpan.classList.toggle("switch-btn-span-dark")
//     for(i = 0; i < boxes.length; i = i +1 ) {
//         boxes[i].classList.toggle("dark-mode")
//     }
//     for(i = 0; i < todayBoxes.length; i = i +1 ) {
//         todayBoxes[i].classList.toggle("dark-mode")
//     }

//    for (i = 0; midH1.length; i = i + 1){
//     midH1[i].classList.toggle("black-text");
//     midH1[i].classList.toggle("white-text");

//      }
//      overView.classList.toggle("gray-color")
//      overView.classList.toggle("white-text")

// })
