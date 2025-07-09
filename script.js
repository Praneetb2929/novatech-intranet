
// Vote handler
function vote(day) {
  let count = localStorage.getItem(day) || 0;
  count++;
  localStorage.setItem(day, count);
  document.getElementById(day).innerText = count;
}

// Fetch and display weather from Open-Meteo
fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true")
  .then(response => response.json())
  .then(data => {
    const temp = data.current_weather.temperature;
    document.getElementById("weather").innerText = `🌦️ Bangalore: ${temp}°C`;
  })
  .catch(() => {
    document.getElementById("weather").innerText = "🌦️ Weather unavailable";
  });

