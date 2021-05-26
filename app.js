
const openWeatherCurrentKey = '993f916fa6417076b75a3735eeb0d504'
async function getCurrentWeatherData(location){
    response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${openWeatherCurrentKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.main)
            let temperature = data.main['temp'];
            let feels_like = data.main['feels_like'];
            let humidity = data.main['humidity'];
            console.log(`The Temperature is ${temperature} and feels like ${feels_like}. The Humidity is ${humidity}.`)


        })
}
let weatherResponse = getCurrentWeatherData('Vancouver');








 

