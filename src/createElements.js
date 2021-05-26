export function createDisplay(tempData, locationData, humidity, maxTemp, minTemp, unit){
    const temperatureDisplayDiv = document.getElementById('temperature');
    const detailsDiv = document.getElementById('details');
    const locationDiv = document.getElementById('location');
    const maxTempDiv = document.createElement('div');
    const minTempDiv = document.createElement('div');
    const humidityDiv = document.createElement('div');

    maxTempDiv.classList = "weatherDetail";
    maxTempDiv.setAttribute('id', 'maxTemp');
    minTempDiv.classList = "weatherDetail";
    minTempDiv.setAttribute('id', 'minTemp');
    humidityDiv.setAttribute('id', 'humidity');
    humidityDiv.classList = 'weatherDetail';

    humidityDiv.textContent = `Humidity: ${humidity}`;
    minTempDiv.textContent = `Low: ${minTemp} ${unit}`;
    maxTempDiv.textContent = `High: ${maxTemp} ${unit}`;
    temperatureDisplayDiv.textContent = tempData + unit;
    locationDiv.textContent = locationData;
    detailsDiv.appendChild(maxTempDiv);
    detailsDiv.appendChild(minTempDiv);
    detailsDiv.appendChild(humidityDiv);

}