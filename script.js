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