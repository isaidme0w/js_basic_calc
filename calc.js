const inputElem = document.getElementById("calcsc");
var num1 = null;
var num2 = null;
var res = null;
var modify = false;
var operation = 1;
var block = false;

inputElem.addEventListener("change", function(){
    let val = inputElem.value;
    if(isNaN(val) || val == "") {
        inputElem.value = 0;
    }
});

function addNum(btnElem) {
    if(modify) {
        inputElem.value = btnElem.innerHTML;
        modify = false;
    }
    else if(inputElem.value == 0) {
        inputElem.value = btnElem.innerHTML;
    } else {
        inputElem.value += btnElem.innerHTML;
    }
}

function clr() {
    inputElem.value = 0;
    num1 = null;
    num2 = null;
    res = null;
    modify = false;
    operation = 1
}

function sum() {
    operation = 1;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else {
        num2 = parseFloat(inputElem.value);
        block = false;
        equal();
    }
}
function sub() {
    operation = 2;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else {
        num2 = parseFloat(inputElem.value);
        block = false;
        equal();
    }
}

function multi() {
    operation = 3;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else {
        num2 = parseFloat(inputElem.value);
        block = false;
        equal();
    }
}

function split() {
    operation = 4;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else {
        num2 = parseFloat(inputElem.value);
        block = false;
        equal();
    }
}


function calc() {
    switch(operation) {
        case 1:
            if(res == null) {
                res = num1 + num2;
            } else {
                res += num2;
            }
            inputElem.value = res;
            modify = true;
            block = true;
            break;
        case 2:
            if(res == null) {
                res = num1 - num2;
            } else {
                res -= num2;
            }
            inputElem.value = res;
            modify = true;
            block = true;
            break;
        case 3:
            if(res == null) {
                res = num1 * num2;
            } else {
                res *= num2;
            }
            inputElem.value = res;
            modify = true;
            block = true;
            break;
        case 4:
            if(res == null) {
                res = num1 / num2;
            } else {
                res /= num2;
            }
            inputElem.value = res;
            modify = true;
            block = true;
            break;
        default:
            alert("Error has occured!");
            break;
    }
}

function equal() {
    if(num1 != null && !block) {
        num2 = parseFloat(inputElem.value);
        calc();
    }
}