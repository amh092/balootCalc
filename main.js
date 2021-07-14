"use strict";

// us calcualtion
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
//  take the input value after user change the save to var

inputThem.addEventListener("input", function () {
  if (inputThem.value > 9) {
    if (inputUs.value == "") inputUs.focus();
  }
});
inputUs.addEventListener("input", function () {
  if (inputUs.value > 9) {
    if (inputThem.value == "") inputThem.focus();
  }
});

calcBtn.addEventListener("click", function () {


  if (inputThem.value == "") {
    inputThem.value = 0;
  }
  if (inputUs.value == "") {
    inputUs.value = 0;
  }
  totalUs.innerText = parseInt(inputUs.value) + parseInt(totalUs.innerText);
  totalThem.innerText =
    parseInt(inputThem.value) + parseInt(totalThem.innerText);

if(inputUs.value > 0){
  var last = document.createElement("h1");
  var textLast = document.createTextNode(parseInt(inputUs.value));
  last.appendChild(textLast);
  usHistory.appendChild(last);
}
if(inputThem.value > 0){
  var last2 = document.createElement("h1");
  var textLast2 = document.createTextNode(parseInt(inputThem.value));
  last2.appendChild(textLast2);
  themHistory.appendChild(last2);
}
  inputUs.value = "";
  inputThem.value = "";
});

// to creat h1 text with the value input from user inside the history

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
