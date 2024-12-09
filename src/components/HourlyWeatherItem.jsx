import { weatherCodes } from "../constants"

const HourlyWeatherItem = ({hourlyWeather}) => {
    const date = hourlyWeather.time.split(" ")[0].substring(5, 10)
    const formattedDate = date.split("-").reverse().join("/");

    const temperature = Math.floor(hourlyWeather.temp_c)

    const time = hourlyWeather.time.split(" ")[1].substring(0, 5)
    const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(hourlyWeather.condition.code))

    return (
        <li className="weather-item">
            <p className="date">{formattedDate}</p>
            <p className="time">{time}</p>
            <img src={`icons/${weatherIcon}.svg`} className="weather-icon" />
            <p className="temperature">{temperature}º</p>
        </li>
    )
}

export default HourlyWeatherItem; 