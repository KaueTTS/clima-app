import CurrentWeather from "./components/CurrentWeather"
import HourlyWeatherItem from "./components/HourlyWeatherItem"
import SearchSection from "./components/SearchSection"

const App = () => {
  {/* Busca detalhes do clima com base no URL da API */}
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return <div className="container">
    
    {/* Search Section*/}
    <SearchSection getWeatherDetails={getWeatherDetails} />

    {/* Weather Section */}
    <div className="weather-section">
      <CurrentWeather />

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