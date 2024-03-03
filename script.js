
// Function to calculate the square of a number
function calculateSquare() {
    const inputNumber = parseFloat(document.getElementsByName('display')[0].value);
    const squareResult = Math.pow(inputNumber, 2);
    document.getElementsByName('display')[0].value = squareResult;
}

// Function to calculate the factorial of a number
function calculateFactorial() {
    const inputNumber = parseInt(document.getElementsByName('display')[0].value);
    const factorialResult = getFactorial(inputNumber);
    document.getElementsByName('display')[0].value = factorialResult;
}

function getFactorial(number) {
    if (number < 0) {
        return "undefined";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }               
}

function getHalf(){
    const number = parseFloat(document.getElementsByName('display')[0].value);
    const result = reduceToHalf(number);
    document.getElementsByName('display')[0].value = result;
}

function reduceToHalf(number){
    if (number===0) {
        return "undefined"  
    }else{
        let result =  number * 0.5
        return result;
    }

}
function pi(){
    const result = 3.142
    document.getElementsByName('display')[0].value = result;
}

function getInverse(){
    const number = parseFloat(document.getElementsByName('display')[0].value);
    const result = parseFloat(reduceToQuater(number));
    document.getElementsByName('display')[0].value = result;
}

function reduceToQuater(number){
    if (number===0) {
        return "undefined"  
    }else{
        let result =  (1/number);
        return result;
    }
    

}
function convertToDollar() {
    const input = document.getElementsByName('display')[0].value;
   const result =nairToDollarCOnverter(input);
   document.getElementsByName('display')[0].value = result;
}
function nairToDollarCOnverter(naira){
    if (naira<=0) { return "undefined"
        
    }else{
        const result = naira/1543.55
        return result;
    }

}

function convertToNaira() {
    const input = document.getElementsByName('display')[0].value;
   const result =DollarToNairaCOnverter(input);
   document.getElementsByName('display')[0].value = result;
}

function DollarToNairaCOnverter(naira){
    if (naira<=0) { return "undefined"
        
    }else{
        const result = naira * 1543.55
        return result;
    }

}