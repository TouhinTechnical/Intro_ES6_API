// array je elment golo ace segolo element golo k double banai noton akta array output dakaio
const numbers = [4, 6, 8, 10];
const output = [];

// array function diye
/* function doubleIt(number){
    return number * 2;
} */
const doubleIt = number => number * 2;

// for(const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output); // eita ak line modde kora jai

// array map diye
const output2 = numbers.map(doubleIt);
console.log(output2);

const squares = numbers.map(number => number * number);
console.log(squares);

//
const friends = ['Tom hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(friend => friend.length);
console.log(fLengths);


const productNames = products.map(productName => productName.name);
console.log(productNames);
// forEach kono value retrun korbe nah
const productPrice = products.forEach(productName => productName.price);
console.log(productPrice); // undefined dakasse