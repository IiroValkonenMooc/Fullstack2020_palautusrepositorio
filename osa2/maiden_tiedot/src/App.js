import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CountryInfo from './components/CountryInfo'

function App() {
  const [searchFilter, setSearchFilter] = useState('swi')
  const [countries, setCountries ] = useState([])
  const [localWeather, setLocalWeather ] = useState([])
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

  const handleChange = (event) => {
      setSearchFilter(event.target.value)
  }

  return (
    <div >
      Find countries <input value={searchFilter} onChange = {handleChange} />
      <CountryInfo countries = {countries} filter = {searchFilter} setFilter = {setSearchFilter} 
        weatherApiKey = {apiKey} localWeather = {localWeather} setLocalWeather = {setLocalWeather} />
    </div>
  );
}

export default App;
