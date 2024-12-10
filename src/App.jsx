import { useEffect, useRef, useState } from "react"
import NoResultsDiv from "./components/NoResultsDiv"
import CurrentWeather from "./components/CurrentWeather"
import HourlyWeatherItem from "./components/HourlyWeatherItem"
import SearchSection from "./components/SearchSection"
import { weatherCodes } from "./constants"

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const [currentWeather, setCurrentWeather] = useState({})
  const [hourlyForecast, setHourlyForecast] = useState([])
  const [hasNoResults, setHasNoResults] = useState(false)
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
    setHasNoResults(false)
    window.innerWidth <= 768 && searchInputRef.current.focus()

    try {
      const response = await fetch(API_URL)
      if(!response.ok) throw new Error()
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
    } catch {
      setHasNoResults(true)
    }
  }

  useEffect(() => {
    const defaultCity = "new york"
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&lang=pt&days=2`
        getWeatherDetails(API_URL)
  }, [])

  return ( 
    <div className="container">
      
      {/* Search Section*/}
      <SearchSection getWeatherDetails={getWeatherDetails} searchInputRef={searchInputRef} />

      {hasNoResults ? (
          <NoResultsDiv />
      ) : (
        <div className="weather-section">
          {/* Weather Section */}
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
      )}

    </div>
  )
}

export default App