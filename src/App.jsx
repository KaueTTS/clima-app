import CurrentWeather from "./components/CurrentWeather"
import HourlyWeatherItem from "./components/HourlyWeatherItem"
import SearchSection from "./components/SearchSection"

const App = () => {
  return <div className="container">
    
    {/* Search Section*/}
    <SearchSection />

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