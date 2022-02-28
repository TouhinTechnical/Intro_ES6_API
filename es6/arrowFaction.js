function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const sum1 = add(15, 167);
console.log(sum1);

// arrow function
const add2 = (num1, num2) => num1 + num2; // (=>) eita arrow function motu akta function k jotu chuto lika jai r ki 
const sum2 = add2(23, 45);
console.log(sum2);

const multiply = (num1,num2,num3) => num1 * num2 * num3;
const result = multiply(4,12,3);
console.log(result);

const fiveTimes = (num) => num * 10;
const output = fiveTimes(34);
console.log(output);

// peramater cera likar
const getName = () => 'Brandon Sam';
const name = getName();
console.log(name);

// multi line
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(12, 5);
console.log(total);

const y = x => x * x;
const z = y(5)


const devisionNumber = number => number / 5;
const re = devisionNumber(25);
console.log(re);

const twoNumberMultiply = (num1,num2) => {
    const input1 =  num1 + 2;
    const input2 = num2 + 2;
    const totalAdd = input1 + input2;
    const multiply = totalAdd * 2;
    return multiply;
}
const total1 = twoNumberMultiply(23, 23);
console.log(total1);
