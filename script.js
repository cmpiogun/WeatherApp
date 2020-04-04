var button = document.querySelector("Button");
var form = document.getElementById("form");
var container = document.getElementById("container");
var search = document.getElementById("search");
var contain = document.getElementById("contain");

var apiURL = "http://api.openweathermap.org/data/2.5/weather?";

form.addEventListener("submit", function(e){
    e.preventDefault();

    let searchTerm = search.value.trim();

    if(!searchTerm){
        alert("Please Enter a City");
    }else{
        searchCity(searchTerm);
    }
});

async function searchCity(term){
    const response = await fetch(`${apiURL}q=${term}&appid=c3cb5473d7d7961a88c1c420e2c57c62&units=metric`);
    const data = await response.json(); 

    displayWeather(data);
}

async function displayWeather(data){
    contain.innerHTML = `<h2>Current Weather in ${data.name}, ${data.sys.country}</h2>`;
    container.innerHTML = `<div class="card"> <h5>Type</h5> <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" SameSite="None"> <p>${data.weather[0].main}, ${data.weather[0].description}</p></div>
    <div class="card"> <h5>Tempreture</h5> <p>${data.main.temp} °C </p></div>
    <div class="card"> <h5>Pressure</h5> <p>${data.main.pressure} P </p></div>
    <div class="card"> <h5>Humidity</h5> <p>${data.main.humidity}% </p></div>
    <div class="card"> <h5>Wind Speed</h5> <p>${data.wind.speed}Mph </p></div>
    `;
}

