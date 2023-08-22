let searchBtn = document.querySelector('.search-btn');
let country = document.querySelector('.country');
let result = document.querySelector('.result');

searchBtn.addEventListener('click', () => {
    let countryName = country.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL).then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);   
        console.log(data[0].population);
        console.log(Object.values(data[0].languages).toString().split(',').join(', '));
 
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="Wrapper">
            <div class="data">
                <h4>Capital: </h4> 
                <span>${data[0].capital[0]}</span>
            </div>
        </div>

        <div class="Wrapper">
            <div class="data">
                <h4>Continent: </h4> 
                <span>${data[0].continents[0]}</span>
            </div>
        </div>

        <div class="Wrapper">
            <div class="data">
                <h4>Population: </h4> 
                <span>${data[0].population}</span>
            </div>
        </div>

        <div class="Wrapper">
            <div class="data">
                 <h4>Common Languages: </h4> 
                 <span>${Object.values(data[0].languages).toString().split(',').join(', ')}</span>
            </div>
        </div>

        <div class="Wrapper">
            <div class="data">
                 <h4>Common Currency: </h4> 
                 <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
                 &nbsp;-&nbsp;
                 <span>${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>              
            </div>
        </div>

        `;   
    });
});

