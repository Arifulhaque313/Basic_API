const searchfood = () =>{
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = "";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearch(data.meals))
};

const displaySearch = data =>{
    // console.log(meals);
    const searchResult = document.getElementById('searchResult');
    

    data.forEach(element => {
            console.log(element);

            const div = document.createElement('div');
            div.classList.add('col');

            div.innerHTML = `
                <div class="card">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="card-text">${element.strInstructions}</p>
                </div>
            </div>           
                    
            
            `
;
        searchResult.append(div)
    });
   
    
    
}