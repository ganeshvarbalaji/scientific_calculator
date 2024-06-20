const d = document.getElementById("input_field");
const output = document.getElementById("output_field");

var shift = false;
var math_expression = "";
var expression = "";
var ans = 0;

math.config({precision: 9});

function shift_pressed(){
    if(shift) shift = false;
    else shift = true;
}

function append_to_display(input){
    expression += input;
    math_expression += input;
}

function minus_sign(){
    expression += '\u2013';
    math_expression += '-';
}

function append_operator_to_display(input){
    if(input == '\u2715'){
        math_expression += '*';
        expression += '\u2715';
    }
    else if(input == '\u00F7'){
        math_expression += '/';
        expression += '\u00F7';
    }
    else if(input == '+'){
        math_expression += '+';
        expression += '+';
    }
    else if(input == '-'){
        math_expression += '-';
        expression += '\u2014';
    }
}

function power10(){
    math_expression += "*10^";
    expression += "\u271510^"
}

function clear_display(){
    expression = "";
    math_expression = "";
    output.value = "";
}

function trigonometry(input) {
    switch(input){
        case 'sin':
            if(!shift){
                expression += "sin(";
                math_expression += "sin(";
            }
            else{
                expression += "asin(";
                math_expression += "asin(";
            }
            break;
        case 'cos':
            if(!shift){
                expression += "cos(";
                math_expression += "cos(";
            }
            else{
                expression += "acos(";
                math_expression += "acos(";
            }
            break;
        case 'tan':
            if(!shift){
                expression += "tan(";
                math_expression += "tan(";
            }
            else{
                expression += "atan(";
                math_expression += "atan(";
            }
            break;
    }
}

function delete_last_char(){
    if(expression.length > 0){
        expression = expression.slice(0, -1);
        math_expression = math_expression.slice(0, -1);
    }
}

function ans_click(){
    expression += "Ans";
    math_expression += ans.toString();
}

function equals(){
    const res = math.evaluate(math_expression);
    output.value = res;
    ans = res;
}

var isVisible = true;
function blinkCursor() {
    if (isVisible) d.value = expression + "_";
    else d.value = expression;
    isVisible = !isVisible;
}
setInterval(blinkCursor, 100);

