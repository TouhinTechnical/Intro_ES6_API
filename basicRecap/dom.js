document.getElementById('addBtn').addEventListener('click', function(){
    const borderAdd = document.getElementById('container');
    borderAdd.style.border = '2px solid #333';
    borderAdd.style.borderRadius = '5px';
});
function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
}
document.getElementById('addFriend').addEventListener('click', function(){
    const containerChild = document.getElementById('container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">friend- 5</h3>
        <p>Ullam, qui!</p>
    `;
    containerChild.appendChild(friendDiv);
})