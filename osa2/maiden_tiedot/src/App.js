import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CountryInfo from './components/CountryInfo'
import Weather from './components/Weather'

function App() {
  const [searchFilter, setSearchFilter] = useState('swi')
  const [countries, setCountries ] = useState([])
  const [localWeatherSelect, setLocalWeatherSelect ] = useState('')
  const [localWeatherData, setlocalWeatherData] = useState('')
  const apiKey = process.env.REACT_APP_KEY

  const hook = () => {
    console.log('promise');
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
          console.log('response :>> ', response);
          setCountries(response.data);
        } 
    )
}

  useEffect(hook, [])

  const weatherHook = () => {
    if (localWeatherSelect != '') {
      const params = {
        access_key: apiKey,
        query: localWeatherSelect
      }

      console.log('weatherApiKey :>> ', apiKey);
      console.log('params :>> ', params);

      axios.get("http://api.weatherstack.com/current", { params })
        .then(response => {
          console.log('selectedCountryCapitalWeather :>> ', response.data);
          setlocalWeatherData(response.data);
        });

    } else {
      setlocalWeatherData('');
    }

  }

  useEffect(weatherHook, [localWeatherSelect])

  const handleChange = (event) => {
    setSearchFilter(event.target.value)

    let resultFound = false
    let resultCount = 0
    let citySelect = ''
    countries.map(countryName => countryName).forEach(country => {
      if (country.name.toLowerCase().includes(event.target.value.toLowerCase()) ) {
        resultFound = true
        resultCount++
        citySelect = country.capital
      }
    });

    if (resultFound && resultCount === 1) {
      console.log('Weather changed');
      console.log('resultCount :>> ', resultCount);
      setLocalWeatherSelect(citySelect)
    } else {
      console.log('Weather reseted');
      setLocalWeatherSelect('')
    }
  }

  return (
    <div >
      Find countries <input value={searchFilter} onChange = {handleChange} />
      <CountryInfo countries = {countries} filter = {searchFilter} setFilter = {setSearchFilter} setLocalWeather ={setLocalWeatherSelect}/>
      <Weather weatherData = {localWeatherData}/>
    </div>
  );
}

export default App;
