const openWeatherCurrentKey = '993f916fa6417076b75a3735eeb0d504'
async function getForecast(location){
    fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=${openWeatherCurrentKey}`)
    .then(res => res.json)
    .then(data => {
        console.log('Forecast Data:')
        console.log(data);
    })
}
export default getForecast

getForecast('toronto');