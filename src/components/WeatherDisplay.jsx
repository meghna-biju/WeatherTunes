
import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p className="text-gray-500">Enter a city to get weather data.</p>;

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{weatherData.name}</h2>
      <p className="text-lg">{weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
      <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
    </div>
  );
};

export default WeatherDisplay;
