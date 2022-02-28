const numbers = [5, 13, 7, 8, 58, 56, 30, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
console.log(bigNumbers);
console.log(smallNumbers);

// object diye kora jabe
const products = [
    {
      name: 'water bottle',
      price: 50,
      color: 'yellow'  
    },
    {
        name: 'moblie phone',
        price: '15000',
        color: 'black'
    },
    {
        name: 'smart watch',
        price: '3000',
        color: 'black'
    },
    {
        name: 'sticky note',
        price: 30,
        color: 'pink'
    }
];
const prices = products.filter(product => product.price > 100);
console.log(prices);
const color  = products.filter(product => product.color == 'black');
console.log(color);
const colors  = products.find(product => product.color == 'black');
console.log(colors);
