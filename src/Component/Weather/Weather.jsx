import React, { useEffect, useState } from 'react'
import star_dull_icon from "../Assets/star_dull_icon.png"
import clear from "../Assets/Weather/clear.png"
import cloud from "../Assets/Weather/cloud.png"
import drizzle from "../Assets/Weather/drizzle.png"
import humidity from "../Assets/Weather/humidity.png"
import rain from "../Assets/Weather/rain.png"
import search from "../Assets/Weather/search.png"
import snow from "../Assets/Weather/snow.png"
import wind from "../Assets/Weather/wind.png"

import "./Weather.css"
const Weather = () => {
    const [weatherData, setWeatherData] = useState([])
    const [word, setWord] = useState("")

    const allIcons = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "010d": rain,
        "010n": rain,
        "013d": snow,
        "013n": snow,

    }

    const Searched = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7cb28ca188f9012d36ecaa87f86fb22c`
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)

            const icon = allIcons[data.weather[0].icon] || clear;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                description: data.weather[0].description,
            })

        } catch (error) {
            return ""
        }
        setWord("")
    }

    useEffect(() => {
        Searched("london")
    }, [])


    return (
        <div className='whole_weather'>
            <div className='weather'>
                <div className='input_bar'>
                    <input onChange={(e) => setWord(e.target.value)} value={word} placeholder='Search place...' />
                    <img onClick={() => Searched(word)} src={search} alt='' />
                </div>
                <div className='temperature'>
                    <p>{weatherData.description}</p>
                    <img src={weatherData.icon} alt='' />
                    <h2>{weatherData.temperature}<span>0</span>C</h2>
                    <h3>{weatherData.location}</h3>
                </div>
                <div className='humidityandwind'>
                    <div className="humidityandwind_sect">
                        <img src={humidity} alt="" />
                        <div className='humidityandwind_text'>
                            <h3>{weatherData.humidity}%</h3>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="humidityandwind_sect">
                        <img src={wind} alt="" />
                        <div className='humidityandwind_text'>
                            <h3>{weatherData.windSpeed} Km/h</h3>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;