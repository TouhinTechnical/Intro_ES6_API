const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 9000,
    phone: '01717343473',
    address: 'Chandpur',
    dress: 'silver'
};
// const phone = fish.phone;
// const name = fish.name;
// console.log(phone,name);

// ES6 aser por eita ar o shortcut kore jai
const { phone, dress, address, id} = fish;
console.log(dress, id);
// complex vabe korte caile
const company = {
    name: 'Gp',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react'
    }
};
const { work, framework,} = company.web;
console.log(work,framework);