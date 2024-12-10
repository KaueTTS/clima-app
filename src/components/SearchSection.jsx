const SearchSection = ({ getWeatherDetails, searchInputRef}) => {
    const API_KEY = import.meta.env.VITE_API_KEY
    
    {/* Buscar clima da cidade no input */}
    const handleCitySearch = (e) => {
        e.preventDefault()
        const searchInput = e.target.querySelector(".search-input")
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&lang=pt&days=2`
        getWeatherDetails(API_URL)
    }

    {/* Buscar clima da cidade com o botão location */}
    const handleLocationSearch = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords
                const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&lang=pt&days=2`
                getWeatherDetails(API_URL)

                window.innerWidth >= 768 && searchInputRef.current.focus()
            },
            () => {
                alert("Acesso ao local negado. Ative as permissões para usar essa função.")
            }
        )
    }

    return (
        <div className="search-section">
            <form action="#" className="search-form" onSubmit={handleCitySearch}>
                <span className="material-symbols-rounded">search</span>
                <input type="search" placeholder="Coloque o nome da cidade" 
                ref={searchInputRef} className="search-input" required/>
            </form>
            <button className="location-button" onClick={handleLocationSearch}>
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    )
}

export default SearchSection;