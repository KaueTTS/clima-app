import { useRef, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import HourlyWeatherItem from "./components/HourlyWeatherItem"
import SearchSection from "./components/SearchSection"
import { weatherCodes } from "./constants"

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({})
  const [hourlyForecast, setHourlyForecast] = useState([])
  const searchInputRef = useRef(null)

  {/* Cálculo para buscar as próximoas 24h */}
  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0)
    const next24Hours = currentHour + 24 * 60 * 60 * 1000

    const next24HoursData = hourlyData.filter(({time}) => {
      const forecastTime = new Date(time).getTime()
      return forecastTime >= currentHour && forecastTime <= next24Hours
    })

    setHourlyForecast(next24HoursData)
  }
  
  {/* Busca detalhes do clima com base no URL da API */}
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      
      {/* Clima tempo atual */}
      const temperature = Math.floor(data.current.temp_c)
      const description = data.current.condition.text
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code))

      setCurrentWeather({temperature, description, weatherIcon})

      {/* Clima tempo para as próximas 24h */}
      const combinedHourlyData = [...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour]

      searchInputRef.current.value = data.location.name
      filterHourlyForecast(combinedHourlyData)
    } catch (error) {
      console.error("Erro ao buscar os dados do clima", error)
    }
  }

  return <div className="container">
    
    {/* Search Section*/}
    <SearchSection getWeatherDetails={getWeatherDetails} searchInputRef={searchInputRef} />

    {/* Weather Section */}
    <div className="weather-section">
      <CurrentWeather currentWeather={currentWeather}/>

      {/* Hourly Weather forecast list */}
      <div className="hourly-forecast">
        <ul className="weather-list">
          {hourlyForecast.map((hourlyWeather) => (
            <HourlyWeatherItem key={hourlyWeather.time_epoch} hourlyWeather={hourlyWeather}/>
          ))}
        </ul>
      </div>
    </div>
  </div>
}

export default App