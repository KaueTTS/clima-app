import { useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import HourlyWeatherItem from "./components/HourlyWeatherItem"
import SearchSection from "./components/SearchSection"
import { weatherCodes } from "./constants"

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({})
  
  {/* Busca detalhes do clima com base no URL da API */}
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      
      const temperature = Math.floor(data.current.temp_c)
      const description = data.current.condition.text
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code))
      console.log(weatherIcon)
      setCurrentWeather({temperature, description, weatherIcon})
    } catch (error) {
      console.log(error)
    }
  }

  return <div className="container">
    
    {/* Search Section*/}
    <SearchSection getWeatherDetails={getWeatherDetails} />

    {/* Weather Section */}
    <div className="weather-section">
      <CurrentWeather currentWeather={currentWeather}/>

      {/* Hourly Weather forecast list */}
      <div className="hourly-forecast">
        <ul className="weather-list">
          <HourlyWeatherItem />
        </ul>
      </div>
    </div>
  </div>
}

export default App