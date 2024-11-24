const App = () => {
  return <div className="container">
    
    {/* Search Section*/}
    <div className="search-section">
      <form action="#" className="search-form">
        <span className="googlefonts">search</span>
        <input type="search" placeholder="Enter a city name" 
        className="search-input" required/>
      </form>
      <button className="location-button">
        <span className="googlefonts">my_location</span>
      </button>
    </div>

    {/* Weather Section */}
    <div className="weather-section">
      <div className="current-weather">
        <img src="icons/clouds.svg" className="weather-icon" />
        <h2 className="temperature">
          20 <span>ºC</span>
        </h2>
        <p className="description">Partly cloudy</p>
      </div>

      {/* Hourly Weather forecast list */}
      <div className="hourly-forecast">
        <ul className="weather-list">
          <li className="weather-item">
            <p className="time">00:00</p>
            <img src="icons/clouds.svg" className="weather-icon" />
            <p className="temperature">20º</p>
          </li>
          <li className="weather-item">
            <p className="time">00:00</p>
            <img src="icons/clouds.svg" className="weather-icon" />
            <p className="temperature">20º</p>
          </li>
          <li className="weather-item">
            <p className="time">00:00</p>
            <img src="icons/clouds.svg" className="weather-icon" />
            <p className="temperature">20º</p>
          </li>
          <li className="weather-item">
            <p className="time">00:00</p>
            <img src="icons/clouds.svg" className="weather-icon" />
            <p className="temperature">20º</p>
          </li>
          <li className="weather-item">
            <p className="time">00:00</p>
            <img src="icons/clouds.svg" className="weather-icon" />
            <p className="temperature">20º</p>
          </li>
          <li className="weather-item">
            <p className="time">00:00</p>
            <img src="icons/clouds.svg" className="weather-icon" />
            <p className="temperature">20º</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default App