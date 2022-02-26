const max = Math.max(23, 99, 65);
console.log(max);
// array diye boru number bahir korbo
const numbers = [23,345,56,45,99,67];
const maxInArray = Math.max(...numbers);
console.log(maxInArray);
// ...
const number2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(number2);
