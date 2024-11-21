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

    {/* */}
  </div>
}

export default App