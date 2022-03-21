const numberButtons = document.querySelectorAll('.numBtn');
const operationButtons = document.querySelectorAll('.operBtn');
const clearButton = document.querySelector('.clearBtn');
const deleteButton = document.querySelector('.deleteBtn');
const signButton = document.querySelector('.signBtn');
const operateButton = document.querySelector('.operateBtn');

const bottomDisplay = document.querySelector('.btm-display');


let input1 = '';
let input2 = '';
let newInput = '';

// Add number clicked to input 1
numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        displayInput1(button.textContent);
    });
});


const displayInput1 = (num) => {
    if(input1.length==13){return;};
    if(num ==='.' && input1.includes('.')){return;};
    input1 = input1.toString() + num.toString();
    bottomDisplay.textContent=input1;
    return input1;
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
const operate =function(num1,num2,oper){
    let operand=oper;
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
//test operate
console.log(operate(20,4,'/'));



