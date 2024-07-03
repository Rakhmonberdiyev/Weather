
const apiKey = "4abbe5f71b2f902bd0bfffec62786f9a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =  document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    } else{
    var data = await response.json();
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".tempreture").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="img/cloud.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src="img/rain.png";
    }else if (data.weather[0].main == "Snow") {
        weatherIcon.src="img/snow.png"; 
    }else if (data.weather[0].main == "Clear") {
        weatherIcon.src="img/clear.png"; 
    }else if (data.weather[0].main == "Haze") {
        weatherIcon.src="img/haze.png"; 
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display ="none";
    searchBox.value = "";
    }
}
 searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
       }
    });

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    });