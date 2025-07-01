const apiKey = "21baaf38a9fd43a27f0e196d78d467e2"; // Replace with your OpenWeatherMap API key

const form = document.getElementById("location-form");
const cityInput = document.getElementById("city-input");

const weatherInfo = document.getElementById("weather-info");
const locationName = document.getElementById("location-name");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    console.log(res);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    locationName.textContent = `${data.name}, ${data.sys.country}`;
    description.textContent = data.weather[0].description;
    temp.textContent = data.main.temp;
    humidity.textContent = data.main.humidity;
    wind.textContent = data.wind.speed;

    weatherInfo.classList.remove("hidden");
  } catch (err) {
    alert("Error: " + err.message);
    weatherInfo.classList.add("hidden");
  }
});
