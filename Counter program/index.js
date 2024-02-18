 const textContainer = document.querySelector(".text-container")
 const increaseBtn = document.querySelector(".i")
 const decreaseBtn = document.querySelector(".d")
 const resetBtn = document.querySelector(".r")
 let count = 0;



 increaseBtn.onclick = function(){
    count++;
    textContainer.textContent = count;
 }
 decreaseBtn.onclick = function(){
    count--;
    textContainer.textContent = count;
 }
 resetBtn.onclick = function(){
    count = 0;
    textContainer.textContent = count;
 }
