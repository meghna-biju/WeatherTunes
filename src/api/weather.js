const API_KEY = "OPENWEATHER_API"; // Replace with your actual key

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod !== 200) throw new Error(data.message);
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

