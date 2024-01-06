function loadUsers2(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => display(json))
}

function display(data){
        const ul = document.getElementById('users-list');
        for(const user of data){
                console.log(user.name);
                const li = document.createElement('li');
                li.innerText = user.name;
                ul.appendChild(li)
        }
}