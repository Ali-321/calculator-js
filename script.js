
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');


let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';


const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const clearAll = ()=>{
     prevNumber = '';
     calculationOperator = '';
     currentNumber = '0';
}


decimal.addEventListener('click', (event)=>{
   inputDecimal(event.target.value);
   updateScreen(currentNumber);
});

clearBtn.addEventListener('click', ()=>{
     clearAll();
     updateScreen(currentNumber);
});

equalSign.addEventListener('click',() => {
    calculate();
    updateScreen(currentNumber);
});

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
            inputOperator(event.target.value);
    });
});

numbers.forEach((number) => {
    number.addEventListener("click",(event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });    
});


///----{menyimpan angka dan operator untuk melakuakn kalkulasi}=====

const inputNumber = (number) => {
 if(currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;    
    }
}

const inputOperator= (operator)=>{
    if (calculationOperator == '') {
        prevNumber = currentNumber;
    }
        calculationOperator = operator;
        currentNumber = '';
}


const inputDecimal = (dot) =>{
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

///----{Mengaktifkan fungsi kalkulasi ke aplikasi calculator}======

const calculate = () =>{
    let result = currentNumber;
    switch (calculationOperator) {
        case "+":
                result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
                result = prevNumber - currentNumber;
            break;
        case "*":
                result = prevNumber * currentNumber;
            break;
        case "/":
                result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}



