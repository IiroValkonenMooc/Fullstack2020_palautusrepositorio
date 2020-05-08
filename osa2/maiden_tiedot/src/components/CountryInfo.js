import React from 'react'
import axios from 'axios'

const CountryInfo = ({countries, filter, setFilter, weatherApiKey, localWeather, setLocalWeather}) => {

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

        const params = {
            access_key: weatherApiKey,
            query: countriesFiltered[0].capital
        }
        
        console.log('weatherApiKey :>> ', weatherApiKey);
        console.log('params :>> ', params);

        axios.get("http://api.weatherstack.com/current", { params })
            .then(response => {
                //setLocalWeather(response.data); 
                console.log('selectedCountryCapitalWeather :>> ', response.data);
            });
        

        console.log('localWeather :>> ', localWeather);


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
                <h3>Weather in {countriesFiltered[0].capital}</h3>
                {/* <p><strong>temperature:</strong> {localWeather.current.temperature} </p> */}
            </div>
        )

    } else {
        return (
            <div>
                {countriesFiltered.map( (country, index) => {
                    return(
                        <p key={index} >
                            {country.name} 
                            <button onClick = {() => setFilter(country.name) } >
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