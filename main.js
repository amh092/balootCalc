'use strict';

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




calcBtn.addEventListener("click", function(){
    if (inputThem.value == ""){
        inputThem.value = 0
    }
    if (inputUs.value == ""){
        inputUs.value = 0
    }
    totalUs.innerText = parseInt(inputUs.value) + parseInt(totalUs.innerText)
    totalThem.innerText = parseInt(inputThem.value) + parseInt(totalThem.innerText)

   
     var last  =  document.createElement("h1");
     var textLast =  document.createTextNode(parseInt(inputUs.value))
    last.appendChild(textLast);
    usHistory.appendChild(last);

     var last2  =  document.createElement("h1");
     var textLast2 =  document.createTextNode(parseInt(inputThem.value))
    last2.appendChild(textLast2);
    themHistory.appendChild(last2);

    inputUs.value = "";
    inputThem.value = "";
    
})

// to creat h1 text with the value input from user inside the history 



   
