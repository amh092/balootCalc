var textLast,
    last,
    textLast2,
    last2,
    totalUs = document.getElementById("us-total"),
    inputUs = document.getElementById("us"),
    totalThem = document.getElementById("them-total"),
    inputThem = document.getElementById("them"),
    calcBtn = document.getElementById("calc"),
    usHistory = document.getElementById("history-them"),
    themHistory = document.getElementById("history-us"),
    undo = document.getElementsByTagName("svg")[0],
    switchBtn = document.getElementsByTagName("button")[0],
    bodyTag = document.getElementsByTagName("body")[0];


    switchBtn.addEventListener("click",function(){
        bodyTag.classList.toggle("white-back")
        bodyTag.classList.toggle("black-color")
        bodyTag.classList.toggle("white-color")
        usHistory.classList.toggle("left-border-black")
        usHistory.classList.toggle("left-border-white")
        undo.classList.toggle("undo");
        switchBtn.classList.toggle("white-mode");
        switchBtn.classList.toggle("black-mode");
       

    })

inputThem.addEventListener("input", function () {
    "use strict";
    inputThem.value.length >= 2 && "" === inputUs.value && inputUs.focus();
}),
    inputUs.addEventListener("input", function () {
        "use strict";
        inputUs.value.length >= 2 && "" == inputThem.value && inputThem.focus();
    }),
    calcBtn.addEventListener("click", function () {
        "use strict";
        "" == inputThem.value && (inputThem.value = 0),
            "" == inputUs.value && (inputUs.value = 0),
            (totalUs.innerText = parseInt(inputUs.value) + parseInt(totalUs.innerText)),
            (totalThem.innerText = parseInt(inputThem.value) + parseInt(totalThem.innerText)),
            inputUs.value > 0
                ? ((last = document.createElement("h1")), (textLast = document.createTextNode(parseInt(inputUs.value))), last.appendChild(textLast), usHistory.appendChild(last))
                : ((last = document.createElement("h1")), (textLast = document.createTextNode(0)), last.appendChild(textLast), usHistory.appendChild(last)),
            inputThem.value > 0
                ? ((last2 = document.createElement("h1")), (textLast2 = document.createTextNode(parseInt(inputThem.value))), last2.appendChild(textLast2), themHistory.appendChild(last2))
                : ((last2 = document.createElement("h1")), (textLast2 = document.createTextNode(0)), last2.appendChild(textLast2), themHistory.appendChild(last2)),
            "" == inputThem.value && (inputThem.value = 0),
            "" == inputUs.value && (inputUs.value = 0),
            (inputUs.value = ""),
            (inputThem.value = ""),
            0 == usHistory.lastChild.innerText && themHistory < 0 && usHistory.lastChild.remove(),
            0 == themHistory.lastChild.innerText && usHistory < 0 && themHistory.lastChild.remove(),
            0 == usHistory.lastChild.innerText && 0 == themHistory.lastChild.innerText && (themHistory.lastChild.remove(), usHistory.lastChild.remove());
    }),
    undo.addEventListener("click", function () {
        "use strict";
        (totalThem.innerHTML > 0 || totalUs.innerHTML > 0) &&
            ((totalThem.innerHTML = parseInt(totalThem.innerHTML) - parseInt(themHistory.lastChild.innerHTML)),
            (totalUs.innerHTML = parseInt(totalUs.innerHTML) - parseInt(usHistory.lastChild.innerHTML)),
            "" == totalUs.innerHTML && (totalUs.innerHTML = 0),
            "" == totalThem.innerHTML && (totalThem.innerHTML = 0),
            themHistory.childElementCount > 0 && themHistory.lastChild.remove(),
            usHistory.childElementCount > 0 && usHistory.lastChild.remove());
    });
var newGame = document.getElementById("new");
newGame.addEventListener("click", function () {
    "use strict";
    if (((totalThem.innerText = 0), (totalUs.innerText = 0), (inputThem.value = ""), (inputUs.value = ""), usHistory.childElementCount > 0)) for (; usHistory.firstChild; ) usHistory.removeChild(usHistory.firstChild);
    if (themHistory.childElementCount > 0) for (; themHistory.firstChild; ) themHistory.removeChild(themHistory.firstChild);
}),
    usHistory.addEventListener("click", function () {
        "use strict";
        inputUs.focus();
    }),
    themHistory.addEventListener("click", function () {
        inputThem.focus();
    });
