const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}

loadCountry();

const displayCountry = countries =>{
    const countryid = document.getElementById("country")
    countries.forEach(c => {
        // console.log(c.name); 
        const h3 = document.createElement("h3");
        const div = document.createElement("div");
        const p = document.createElement("p");
        
        div.classList.add('country')
        p.innerText=c.capital;
        h3.innerText=c.name.common;
        div.innerHTML = `
        <h3>${c.name.common}</h3>
        <p>${c.capital}</p>
        <button onclick="loadCountryDetails('${c.name.common}')" style="padding:8px 12px; background-color:blue;oultine:none;border:none;border-radius:5px; color:white">Details</button>

        `;
        // div.appendChild(h3);
        // div.appendChild(p);
        countryid.appendChild(div);
    });
    
}

const loadCountryDetails = name =>{
     const url = `https://restcountries.com/v3.1/name/${name}`;
    // console.log(url);

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data[0]));
}

const displayCountryDetails= country =>{
    document.getElementById('countryDetails').innerHTML=`

    <h3>${country.name.common}</h3> 
    <p>Population : ${country.population}</p> 
    
    <img src="${country.flags.png}" width="300px">
    `
    console.log(country);
}
   

