const apiKey = "5d57d62e4175c4884dae0bdcd78ca00b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    //we have temp in the main son we are adding main.temp and same for humidity
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

}

checkWeather();
console.log("After Function call to checkWeather");
