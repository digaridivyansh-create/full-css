import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    if (city === "") return;

    // Dummy data for simple project
    setWeather({
      name: city,
      temp: 28,
      humidity: 65,
      wind: 12,
      condition: "Cloudy",
    });
  };

  return (
    <div className="main">
      <div className="weatherBox">
        <h1>Weather App</h1>

        <div className="searchBox">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={getWeather}>Search</button>
        </div>

        {weather && (
          <div className="card">
            <h2>{weather.name}</h2>
            <h3>{weather.condition}</h3>
            <p>🌡 Temperature: {weather.temp}°C</p>
            <p>💧 Humidity: {weather.humidity}%</p>
            <p>🌬 Wind Speed: {weather.wind} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;