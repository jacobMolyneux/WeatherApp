async function getForecast(location){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=535d7af435ce4a459f381902212605&q=${location}&days=7&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => {
            console.log("forecast Date:")
            console.log(data)
            console.log('the forcast data is: '+ data);
            let forecast = data['forecast']['forecastday'][0];
            let date = data['forecast']['forecastday'][0]['date']
            console.log('the date is: ' + date);
            let futureMaxTemp = data.forecast.forecastday[0].day.maxtemp_c;
            let futureMinTemp = data.forecast.forecastday[0].day.mintemp_c;
            let futureAvgTemp = data.forecast.forecastday[0].day.avgtemp_c;
            const rootElement = document.getElementById('forecastRoot'); 
            return futureMaxTemp, futureMinTemp, futureAvgTemp, rootElement;
        },
        createForecastDisplay(futureAvgTemp, futureMaxTemp, futureMinTemp, rootElement)
        )
        
}
function createForecastDisplay(avgTemp, maxTemp, minTemp, root) {
    const forecastDayHolder = document.createElement('div');
    forecastDayHolder.setAttribute('id', 'forecastDayHolder');
    const maxTempHolder = document.createElement('div');
    maxTempHolder.textContent = maxTemp;
    maxtempHolder.setAttribute('id', 'MaxTempHolder');
    const minTempHolder = document.createElement('div');
    minTempHolder.textContent = minTemp;
    const avgTempHolder = document.createElement('div');
    avgTempHolder.textContent = avgTemp;
    const MaxiMinHolder = document.createElement('div');
    maxiMinHolder.setAttribute('id', 'maximinHolder');
    root.appendChild(forecastDayHolder);
    maxiMinHolder.appendChild(minTempHolder);
    maxiMinHolder.appendChild(maxTempHolder);
    forecastDayHolder.appendChild(avgTempHolder);
    forecastDayHolder.appendChild(MaxiMinHolder);
    
    
}
export {getForecast, createForecastDisplay}