
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorHistoriScreen = document.querySelector(".calculator-histori-screen")
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');


let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let calculationHistori = "";
let prevNumber2 = '';
let operator = "";



const updateHistoriScreen = (calculation) =>{
    calculatorHistoriScreen.value = calculation;
}

const inputAll= ()=>{
 calculationHistori = prevNumber +" "+operator+" "+prevNumber2 +" = "+ currentNumber;
}

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

percentage.addEventListener("click",()=>{
        currentNumber = calculatePersen(parseFloat(currentNumber));
        updateScreen(currentNumber);
});

equalSign.addEventListener('click',() => {
    calculate();
    inputAll();
    updateScreen(currentNumber);
    updateHistoriScreen(calculationHistori);
    calculationHistori = '';
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
    if (calculationOperator === '') {
        prevNumber = currentNumber;
       //  calculationHistori += prevNumber +" ";
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
    prevNumber2 = currentNumber;

    ///cek persen

    //calculationHistori += " "+currentNumber+ " = "; 
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
   // calculationHistori += result;
   operator = calculationOperator;
    calculationOperator = '';
}


let calculatePersen = (number)=>{
    return  number * 1/100;
}