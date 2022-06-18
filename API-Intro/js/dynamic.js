document.querySelector('.btn').addEventListener('click',function(){
// get the division id 
const app = document.getElementById("app"); 

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => displayData(data));

function displayData(data){

    for(const datas of data){
        const li = document.createElement("li");
        // console.log(datas);

        li.innerText = `Title : ${datas.body}`;
        li.classList.add('list')
        app.appendChild(li);

    }
}
});