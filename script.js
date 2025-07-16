const apiKey = "5d57d62e4175c4884dae0bdcd78ca00b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    //we have temp in the main son we are adding main.temp and same for humidity
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value); // it will pass the city value 
})


checkWeather(city);
console.log("After Function call to checkWeather");
