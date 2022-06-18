fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displaypost(data));


function displaypost(data) {

    const post = document.getElementById("post");
    for (const datas of data) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${datas.title}</h3>
            <p>${datas.body}</p>
        `;
        post.appendChild(div);
        div.classList.add('post');
        console.log(datas);
    }


}