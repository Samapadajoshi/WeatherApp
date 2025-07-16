const apiKey = "5d57d62e4175c4884dae0bdcd78ca00b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhanki";

async function checkWeather() {
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    var data = await response.json();

    console.log(data);

}

checkWeather();
console.log("After Function call to checkWeather");
