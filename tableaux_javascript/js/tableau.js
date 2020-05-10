let array1 = [];

document.getElementById("addButton").addEventListener("click", addInArray);

document.getElementById("deleteButton").addEventListener("click", function() {
    deleteArray();
    clearArrayPosNeg();
})

document.getElementById("sumArray").addEventListener("click", function() {
  
    document.getElementById("resultSum").textContent = sumArray();
})

document.getElementById("nbPosNeg").addEventListener("click", function() {
    document.getElementById("resultPosNeg").textContent = numberOfNegative();
})

document.getElementById("splitButton").addEventListener("click", function() {
    clearArrayPosNeg();
    splitArray();
    showArrayPositive();
    showArrayNegative();
})