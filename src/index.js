import {createDisplay} from './createElements.js'
import {displayImage} from './weatherIcons.js'
// import getForecast from './forecast.js'
const openWeatherCurrentKey = '993f916fa6417076b75a3735eeb0d504'
const forecastKey = '0bfbf232452b808462e3a41a14932041'
async function getCurrentWeatherData(location){
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${openWeatherCurrentKey}`)
        .then(res => res.json())
        .then(data => {
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
            let container = document.getElementById('currentWeatherDisplayDiv');
            displayImage(weather, container, description); 
            
        })
}


async function getForecast(location){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=535d7af435ce4a459f381902212605&q=${location}&days=7&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => {
            console.log("forecast Date:")
            console.log(data)
            console.log('the forcast data is: '+ data);
            let date = data.forecast['forecastday']['0']['day'];
            console.log('the data for a single day is :' + date);
        })
}
const input = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function(){ 
    let location = input.value;
    getCurrentWeatherData(location);
    getForecast(location);
})

let weatherData = getCurrentWeatherData(input.value);
console.log(weatherData);
let forecast = getForecast(input.value);
console.log(forecast);






 

