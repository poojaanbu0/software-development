const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equal");

let currentvalue = "";
let previousvalue = "";
let operator = "";

function updateDisplay(){
    display.textContent = previousvalue + operator + currentvalue;

}

function calc(previousvalue, currentvalue,operator){
    const num1 = Number(previousvalue);
    const num2 = Number(currentvalue);

    switch(operator){
        case '+':
            return num1 + num2;
        case '−':
            return num1 - num2;
        case '×':
            return num1 * num2;
        case '÷':
            return num1 / num2;
    }
}

numberButtons.forEach(button => {
    button.addEventListener("click", ()=>
    {
        currentvalue += button.textContent;
        updateDisplay();
    })
})

console.log(operatorButtons);
operatorButtons.forEach(button=> { 
    console.log(button);
    button.addEventListener("click", ()=>{
        previousvalue = currentvalue;
        operator = button.textContent;
        currentvalue = "";

        updateDisplay();
           
    })
})

clearButton.addEventListener("click",() =>
{
     currentvalue = "";
     previousvalue = "";
     operator = "";
    
     updateDisplay();
});


 equalsButton.addEventListener("click", () => {
    const res = calc(previousvalue, currentvalue, operator);

    console.log(res);
    display.textContent = res;

    console.log('cureent:',currentvalue);
    console.log('previous:',previousvalue);
    console.log('opertor',operator);

 });

