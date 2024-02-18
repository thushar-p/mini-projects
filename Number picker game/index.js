let mainDiv = document.querySelector("div")

document.querySelector(".sub").addEventListener("click", () => {
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);

    if (num1 > num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    
    
    let random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    console.log(random);

    let para = document.createElement("p");
    para.setAttribute("class", "output");
    mainDiv.appendChild(para);

    let op = document.querySelector(".output");
    op.innerHTML = random

})
