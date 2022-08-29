const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryDiv = document.getElementById('countries-container')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('countriesId');
        div.innerHTML = `
        <h4>Name: ${country.name.common} </h4>
        <h6>Capital : ${country.capital ? country.capital[0] : 'No capital'} </h6>
        <button onclick ="countriesCode('${country.cca2}')">Details</button>
    `;
        countryDiv.appendChild(div)


    })
}

const countriesCode = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoad(data[0]))
}

const displayLoad = country => {
    const div = document.getElementById('display-container');
    div.innerHTML = `
            <h3>Country Name : ${country.name.common}</h3>
            <img src="${country.flags.png}">
            `
}

loadCountries()
