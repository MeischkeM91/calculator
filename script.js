const numberButtons = document.querySelectorAll('.numBtn');
const operationButtons = document.querySelectorAll('.operBtn');
const clearButton = document.querySelector('.clearBtn');
const deleteButton = document.querySelector('.deleteBtn');
const signButton = document.querySelector('.signBtn');
const operateButton = document.querySelector('.operateBtn');

const bottomDisplay = document.querySelector('.btm-display');
const topDisplay = document.querySelector('.top-display');

let input1 = '';
let input2 = '';
let oper = '';
let inputHold = '';

// Add number clicked to input on bottom
numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        displayInputBtm(button.textContent);
    });
});

const displayInputBtm = (num) => {
    if(input1.length==13){return;};
    if(num ==='.' && input1.includes('.')){return;};
    input1 = input1.toString() + num.toString();
    bottomDisplay.textContent=input1;
    return input1;
};

// Display the previous input and operation called when selected.
operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        inputHold=input1;
        oper = button.textContent;
        updateTopDisplay(input1, oper);
    });
});

const updateTopDisplay = (btmDisp, op) =>{
    topDisplay.textContent= `${btmDisp}  ${op}`;
    bottomDisplay.textContent='0';
    input1='';
};

// Functions for math operations
const add = function(x, y){
    return x+y;
}
const subtract = function(x, y){
    return x-y;
}
const multiply = function(x, y){
    return x*y;
}
const divide = function(x, y){
    return x/y;
}

// Operate function will take 2 numbers and operand to call the correct math function
const operate =function(num1,num2,op){
    let operand=op;
    switch(operand){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        default:
            console.log('::INVALID OPERAND::')
    }
}

// Clear display and input
clearButton.addEventListener('click', ()=>{
    input1='';
    input2='';
    oper='';
    topDisplay.textContent='0';
    bottomDisplay.textContent='0';
})

// Make the calculation
const makeCalculation = ()=>{
    input2 = bottomDisplay.textContent;
    bottomDisplay.textContent=operate(parseFloat(inputHold),parseFloat(input2),oper);
    input1='';
    topDisplay.textContent='0';
}
operateButton.addEventListener('click',()=>{
    makeCalculation();
});

// Delete button will delete the last character
deleteButton.addEventListener('click', ()=>{
    input1 = bottomDisplay.textContent.slice(0,-1);
    bottomDisplay.textContent=input1;
});

// Update inputs sign 
signButton.addEventListener('click', ()=>{
    input1 = `-`+bottomDisplay.textContent;
    bottomDisplay.textContent=input1;
})
