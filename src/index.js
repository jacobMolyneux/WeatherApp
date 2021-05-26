import {createDisplay} from './createElements.js'
import {displayImage} from './weatherIcons.js'
const openWeatherCurrentKey = '993f916fa6417076b75a3735eeb0d504'
async function getCurrentWeatherData(location){
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${openWeatherCurrentKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            console.log(data.main);
            let temperature = data.main['temp'];
            let feels_like = data.main['feels_like'];
            let maxTemp = data.main['temp_max'];
            let minTemp = data.main['temp_min'];
            let humidity = data.main['humidity'];
            console.log(`The Temperature is ${temperature} and feels like ${feels_like}. The Humidity is ${humidity}.`)
            let unit = "C"
            createDisplay(temperature, location, humidity, maxTemp, minTemp, unit);
            let description = data.weather[0]['description']
            let weather = data.weather[0]['main'];
            displayImage(weather, document.getElementById('currentWeatherDisplayDiv'), description); 
            console.log(icon);
            console.log(description);
        })
}
let weatherData = getCurrentWeatherData('seattle')
console.log(weatherData);

async function getForecast(location){
    fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=7&appid=${openWeatherCurrentKey}`)
        .then(res => res.json())
        .then(data => {
            console.log("forecast Date:")
            console.log(data)
        })
}








 

