// chaning just holo (?) condition check korbe
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
const { work, framework,third} = company?.web;
console.log(work,framework,third);