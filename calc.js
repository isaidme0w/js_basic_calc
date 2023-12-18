const inputElem = document.getElementById("calcsc");
var num1 = null;
var num2 = null;
var res = null;
var modify = false;

inputElem.addEventListener("change", function(){
    let val = inputElem.value;
    if(isNaN(val) || val == "") {
        inputElem.value = 0;
    }
});

function addNum(btnElem) {
    if(modify) {
        inputElem.value = 0;
        modify = false;
    }
    if(inputElem.value == 0) {
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
}

function sum() {
    operation = 1;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else if(num2 == null) {
        num2 = parseFloat(inputElem.value);
        calc();
    }
}
function sub() {
    operation = 2;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else if(num2 == null) {
        num2 = parseFloat(inputElem.value);
        calc();
    }
}

function multi() {
    operation = 3;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else if(num2 == null) {
        num2 = parseFloat(inputElem.value);
        calc();
    }
}

function split() {
    operation = 4;
    if(num1 == null) {
        num1 = parseFloat(inputElem.value);
        inputElem.value = 0;
    } else if(num2 == null) {
        num2 = parseFloat(inputElem.value);
        calc();
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
            num2 = null;
            modify = true;
            break;
        case 2:
            if(res == null) {
                res = num1 - num2;
            } else {
                res -= num2;
            }
            inputElem.value = res;
            num2 = null;
            modify = true;
            break;
        case 3:
            if(res == null) {
                res = num1 * num2;
            } else {
                res *= num2;
            }
            inputElem.value = res;
            num2 = null;
            modify = true;
            break;
        case 4:
            if(res == null) {
                res = num1 / num2;
            } else {
                res /= num2;
            }
            inputElem.value = res;
            num2 = null;
            modify = true;
            break;
        default:
            alert("Error has occured!");
            break;
    }
}