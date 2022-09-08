
import { useEffect, useState } from "react"
import axios from 'axios'

const OnlyOne = ({ search }) => {
    const [weather, setWeather] = useState(null)
    const api_key = process.env.REACT_APP_API_KEY



    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${search[0].latitude}&lon=${search[0].longitude}&appid=${api_key}`)
            .then(response => setWeather(response.data))
    }, [])


    return (
        <>
            <h3>Name: {search[0].name.common}</h3>
            <section> Capital: {search[0].capital} </section>
            <div>Area: {search[0].area} </div>
            <div><strong>Languages:</strong> {search[0].languages.map(language => <li key={language}>{language}</li>)}</div>
            <div><img src={search[0].flags.png} /> </div>

            <h4>Weather in {search[0].capital}</h4>
            <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <div>Temperature: {weather && (weather.main.temp - 273).toFixed(2)} celcius</div>
            <div>Wind Speed: {weather && weather.wind.speed} m/s</div>


        </>
    )
}

export default OnlyOne
