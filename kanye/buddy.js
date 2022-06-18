const loadQuotes = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data => dis(data));
}
loadQuotes();
const dis = data =>{
    const buddy = data.results;


    const codeElement = document.getElementById("buddy");
    
    for(const buddys of buddy){
        console.log(buddys.email);
        const p = document.createElement('p');
        p.innerText = buddys.email;

        codeElement.appendChild(p);
    }
}