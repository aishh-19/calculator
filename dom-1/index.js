let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let buttons = document.querySelectorAll("#btn");
let answer = document.querySelector(".ans");
let reset = document.querySelector(".reset");
buttons.forEach(button =>{
    button.addEventListener("click",function(){
        if(button.innerHTML === "Add"){
            let sum = parseInt(input1.value) + parseInt(input2.value);
            answer.innerHTML= sum;
        }
        if(button.innerHTML === "Sub"){
            let sum = parseInt(input1.value) - parseInt(input2.value);
            answer.innerHTML= sum;
        }
        if(button.innerHTML === "mult"){
            let sum = parseInt(input1.value) * parseInt(input2.value);
            answer.innerHTML= sum;
        }
        if(button.innerHTML === "reset"){
            answer.innerHTML= 0;
        }
    })
})