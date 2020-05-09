import React from 'react'

const Weather = ({weatherData}) => {
    console.log('weatherData in Weather :>> ', weatherData);

    if (weatherData === '' ) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div>
                <h3>weather in {weatherData.location.name}</h3>
                <p><strong>temperature: </strong>{weatherData.current.temperature}</p>
                <img width = {100} src = {weatherData.current.weather_icons[0]} alt = 'here should be a weather icon' ></img>
                <p><strong>wind: </strong>{weatherData.current.wind_speed} ms direction {weatherData.current.wind_dir} </p>
            </div>
        )
    }
}

export default Weather