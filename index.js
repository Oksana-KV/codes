function showTemp(event) {
  event.preventDefault();

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    let message = `${city}`;
    let cityOut = document.querySelector("#city-Out");
    cityOut.innerHTML = message;
    let temperature_search = `${temperature}`;
    let temperature_s = document.querySelector("#temper");
    temperature_s.innerHTML = temperature_search;
  }

  let apiKey = "40b745c14eadad7b7c4e6e4bf3b70103";
  let units = "metric";
  let city = document.getElementById("city-In").value;
  console.log(city);

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let button = document.querySelector("#button-in");
button.addEventListener("click", showTemp);

function showTempCurrent(event) {
  event.preventDefault();
  function showWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    let message = `${city}`;
    let cityOut = document.querySelector("#city-Out");
    cityOut.innerHTML = message;
    let temperature_search = `${temperature}`;
    let temperature_s = document.querySelector("#temper");
    temperature_s.innerHTML = temperature_search;
  }

  function retrievePosition(position) {
    let apiKey = "40b745c14eadad7b7c4e6e4bf3b70103";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let buttonCurrent = document.querySelector("#current-location-button");
buttonCurrent.addEventListener("click", showTempCurrent);

let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[date.getDay()];
  let currentHaurs = date.getHours();
  let currentMinutes = date.getMinutes();

  let formattedDate = `${currentDay} ${currentHaurs}:${currentMinutes}`;

  return formattedDate;
}

let dateTime = document.querySelector("#date-Time");
dateTime.innerHTML = formatDate(currentTime);
