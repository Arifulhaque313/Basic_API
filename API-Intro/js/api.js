function loadUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displaydata(data))

}

function displaydata(data) {
    const user = document.getElementById("user")

    for (const datas of data) {
        const li = document.createElement("li");
        li.innerText = `Name : ${datas.name}   Email: ${datas.email}`
        console.log(datas.name)
        user.appendChild(li);

    }
}