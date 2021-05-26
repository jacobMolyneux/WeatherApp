export function createDisplay(tempData, locationData, humidity, maxTemp, minTemp, unit){
    let temperatureDisplayDiv = document.getElementById('temperature');
    let detailsDiv = document.getElementById('details');
    let locationDiv = document.getElementById('location');
    let maxTempDiv = document.getElementById('maxTemp');
    let minTempDiv = document.getElementById('minTemp');
    let humidityDiv = document.getElementById('humidity');

    humidityDiv.textContent = `Humidity: ${humidity}`;
    minTempDiv.textContent = `Low: ${minTemp} ${unit}`;
    maxTempDiv.textContent = `High: ${maxTemp} ${unit}`;
    temperatureDisplayDiv.textContent = tempData + unit;
    locationDiv.textContent = locationData.toUpperCase();
    detailsDiv.appendChild(maxTempDiv);
    detailsDiv.appendChild(minTempDiv);
    detailsDiv.appendChild(humidityDiv);

}
