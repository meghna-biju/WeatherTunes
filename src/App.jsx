import React, { useState } from "react";
import { fetchWeather } from "./api/weather";
import { getSongsForWeather } from "./api/songs";
import WeatherDisplay from "./components/WeatherDisplay";
import SongList from "./components/SongList";
import './App.css';
import logo from './components/logo.jpg'


const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [songs, setSongs] = useState([]);

  const handleSearch = async () => {
    if (!city) return;
    const data = await fetchWeather(city);
    if (data) {
      setWeatherData(data);
      const songList = await getSongsForWeather(data.weather[0].main);
      setSongs(songList);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <img src={logo} alt="App Logo" className="logo" />
      <h1 className="text-3xl font-bold mb-4">Weather-Based Music Recommender</h1>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-lg">
          Search
        </button>
      </div>

      <WeatherDisplay weatherData={weatherData} />
      {weatherData && <SongList songs={songs} />}
    </div>
  );
};

export default App;
