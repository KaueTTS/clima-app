const CurrentWeather = ({currentWeather}) => {
    return (
        <div className="current-weather">
            <img src="icons/clouds.svg" className="weather-icon" />
            <h2 className="temperature">
                {currentWeather.temperature}<span>ºC</span>
            </h2>
            <p className="description">{currentWeather.description}</p>
        </div>
    )
}

export default CurrentWeather;