async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      document.getElementById("weather").innerHTML = `
        🌡️ Temperature in ${data.name}: ${temp}°C <br>
        ☁️ Condition: ${condition}
      `;
    } else {
      document.getElementById("weather").innerText = "City not found!";
    }
  } catch (error) {
    document.getElementById("weather").innerText = "Error fetching data.";
    console.error(error);
  }
}
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      document.getElementById("weather").innerHTML = `
        🌡️ Temperature in ${data.name}: ${temp}°C <br>
        ☁️ Condition: ${condition}
      `;
    } else {
      document.getElementById("weather").innerText = "City not found!";
    }
  } catch (error) {
    document.getElementById("weather").innerText = "Error fetching data.";
    console.error(error);
  }
}
