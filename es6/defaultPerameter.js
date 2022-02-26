function add(num1,num2){
    const total = num1 + num2;
    return total;
}
const result = add(15, 17);
console.log(result);

// default
function fullName(first, last = 'Chowhury'){
    const name = first + ' ' + last;
    return name;
}
function getSum(a,b=9){
    return a+b;
}
console.log(getSum(2,7));