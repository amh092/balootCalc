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

//  take the input value after user change the save to var 

function checker (){
 
}


calcBtn.addEventListener("click", function(){
    if (inputThem.value == ""){
        inputThem.value = 0
    }
    if (inputUs.value == ""){
        inputUs.value = 0
    }
    totalUs.innerText = parseInt(inputUs.value) + parseInt(totalUs.innerText)
    totalThem.innerText = parseInt(inputThem.value) + parseInt(totalThem.innerText)

    inputUs.value = "";
    inputThem.value = "";
     
})


  
