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
const operator =function(num1,num2,oper){
    this.num1=num1;
    this.num2=num2;
}