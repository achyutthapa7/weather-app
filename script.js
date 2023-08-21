const weather = document.querySelector(".weather");
const form = document.querySelector("form");
const cityInput = document.querySelector(".city");
const cityName = document.querySelector("h1");
const temperature = document.querySelector(".temp");
const weatherCondition = document.querySelector(".condition");
const cross = document.querySelector(".cross");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getWeather(cityInput.value);
});

const getWeather = (city) => {
  cityName.innerText = "Loading....";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e5b2c2373e0d397e963afd8b7ed2ded&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      cityName.innerText = `Name: ${cityInput.value}`;
      temperature.innerText = `Temperatue: ${json.main.temp}ºC`;
      weatherCondition.innerText = `Conditon: ${json.weather[0].main}`;
    });
};
cross.onclick = () => {
  cityInput.value = "";
  cityName.innerText = "";
  temperature.innerText = "";
  weatherCondition.innerText = "";
};
