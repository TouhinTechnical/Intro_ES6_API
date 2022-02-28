const user = {
    id: 11,
    name: 'TOUHIN',
    job: 'actor'
};
console.log(user);

const shop = {
    name: 'Jannatul store',
    address: 'Chittagong',
    products: ['laptop', 'moblie', 'pencil'],
    owner: {
        name: 'touhin',
        profession: 'actor'
    },
    profit: 15000,
    isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);// object stringify take converted korar (parse) korbo string k object convert korbe
console.log(converted);
// json = javascript object natation
// api = application programming interface

// json placeholder
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}
// page load hoya shate dakte caile function call kore dite
loadData();
// 
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}
function displayUsers(data){
    const ul = document.getElementById('usersId');
    for(const user of data){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `Name : ${user.name}, email : ${user.email} `;
        ul.appendChild(li);
    }
}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}

function displayPosts(post){
    // console.log('ami');
    const displayPost = document.getElementById('displayPost');
    displayPost.style.border = '2px solid red';
    displayPost.style.borderRadius = '5px';
    for(const user of post){
        // console.log(userP.title);
        //
        const span = document.createElement('span');
        span.classList.add('id');
        span.innerText = `id : ${user.id}`;
        displayPost.appendChild(span);
        //
        const h2 = document.createElement('h2');
        h2.classList.add('title');
        h2.innerText = `title : ${user.title}`;
        displayPost.appendChild(h2);
        //
        const p = document.createElement('p');
        p.classList.add('body');
        p.innerText = `body : ${user.body}`;
        displayPost.appendChild(p);

    }
}