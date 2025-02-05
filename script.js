const apiKey = "868fc5d3cb178385537ea96edf78a47d"; // OpenWeatherMap API key

document.getElementById("get-weather-btn").addEventListener("click", async () => {
  const cityName = document.getElementById("city-input").value.trim();

  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${apiKey}`;
    const geoResponse = await fetch(geoUrl);

    if (!geoResponse.ok) throw new Error(`Location Error: ${geoResponse.status}`);
    
    const [locationData] = await geoResponse.json();

    if (!locationData) {
      alert("City not found. Please check the name and try again.");
      return;
    }

    const { lat, lon } = locationData;
    fetchWeather(lat, lon, cityName);
  } catch (error) {
    console.error("Error fetching location:", error);
    document.getElementById("city").textContent = "Error loading location data.";
  }
});

async function fetchWeather(latitude, longitude, cityName) {
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const weatherResponse = await fetch(weatherUrl);

    if (!weatherResponse.ok) throw new Error(`API Error: ${weatherResponse.status}`);
    
    const weatherData = await weatherResponse.json();
    const currentTemperature = weatherData.main.temp;

    document.getElementById("city").textContent = `City: ${cityName}`;
    document.getElementById("temperature").textContent = `${currentTemperature.toFixed(1)}°C`;
    document.getElementById("description").textContent = weatherData.weather[0].description;
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("city").textContent = "Error loading weather data.";
  }
}
