function loadPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => displayPosts(json))
}

function displayPosts(posts){
        const postContainer = document.getElementById('post-container');
        for(const post of posts){
                console.log(post);
                const div = document.createElement('div');
                div.classList.add("div-container");
                div.innerHTML = `
                <h4>User : ${post.userId} </h4>
                <h5>Post : ${post.title} </h5>
                <p>Post Description : ${post.body}</p>
                `
                postContainer.appendChild(div); 
        }
}
loadPost();