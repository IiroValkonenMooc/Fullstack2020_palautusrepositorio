import React from 'react'

const CountryInfo = ({countries, filter, setFilter, setLocalWeather}) => {

    let countriesFiltered = countries.slice().filter((country) => {
        // console.log('country :>> ', country);
        // console.log('country.name :>> ', country.name);

        return country.name.toLowerCase().includes(filter.toLowerCase())
    })

    let removeSimilar = false;
    let tempCountry = [];
    countriesFiltered.forEach(country => {
        if(country.name === filter ){
            removeSimilar = true
            tempCountry = country
        }
    });

    if(removeSimilar){
        countriesFiltered = [tempCountry]
    }

    console.log('countriesFiltered :>> ', countriesFiltered);

    if (countriesFiltered.length === 1 ) {
        console.log('Found only one!');
        
        return(
            <div>
                <h2>{countriesFiltered[0].name}</h2>
                <p>
                    {countriesFiltered[0].capital} <br></br>
                    population {countriesFiltered[0].population} 
                </p>
                <h3>Languages</h3>
                <ul>
                    {countriesFiltered[0].languages.map( (lang, index) => <li key= {index} > {lang.name} </li> ) }
                </ul>
                <br></br>
                <img width = {300} src = {countriesFiltered[0].flag} alt = 'here should be a flag' ></img>
            </div>
        )

    } else {

        return (
            <div>
                {countriesFiltered.map( (country, index) => {
                    return(
                        <p key={index} >
                            {country.name} 
                            <button onClick = {() => {
                                setFilter(country.name)
                                setLocalWeather(country.capital)
                                } } >
                                show
                            </button>
                            <br></br>
                        </p>
                    )
                } ) }

            </div>
        )
    }
}

export default CountryInfo