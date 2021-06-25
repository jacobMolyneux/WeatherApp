class day {
  constructor(maxTemp, minTemp, avgTemp, date) {
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.avgTemp = avgTemp;
    this.date = date;
  }

  displayInfo(parentNode) {
    let container = document.createElement("div");
    container.className = "forecastContainer";
    let avgTempDisplay = document.createElement("div");
    avgTempDisplay.setAttribute("id", "AvgTempForecastDisplay");
    avgTempDisplay.textContent = `Average Temp: ${this.avgTemp}`;
    let minTempDisplay = document.createElement("div");
    minTempDisplay.setAttribute("id", "forecastDetail");
    minTempDisplay.textContent = `Min Temp: ${this.minTemp}`;
    let maxTempDisplay = document.createElement("div");
    maxTempDisplay.setAttribute("id", "forecastDetail");
    maxTempDisplay.textContent = `Max Temp: ${this.maxTemp}`;
    let dateDisplay = document.createElement("div");
    dateDisplay.setAttribute("id", "forecastDateDisplay");
    dateDisplay.classList = "forecastdata";
    minTempDisplay.classList = "forecastdata";
    maxTempDisplay.classList = "forecastdata";
    avgTempDisplay.classList = "forecastdata";
    dateDisplay.textContent = this.date;
    container.appendChild(dateDisplay);
    container.appendChild(avgTempDisplay);
    container.appendChild(maxTempDisplay);
    container.appendChild(minTempDisplay);

    parentNode.appendChild(container);
  }
}
async function getForecast(location) {
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=535d7af435ce4a459f381902212605&q=${location}&days=7&aqi=no&alerts=no`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("forecast Date:");
      console.log(data);
      console.log("the forcast data is: " + data);
      let forecast = data["forecast"]["forecastday"][0];
      let date = data["forecast"]["forecastday"][0]["date"];
      let avgTemp = data["forecast"]["forecastday"][0]["day"]["avgtemp_c"];
      let minTemp = data["forecast"]["forecastday"][0]["day"]["mintemp_c"];
      let maxTemp = data["forecast"]["forecastday"][0]["day"]["maxtemp_c"];
      console.log("the date is: " + date);
      console.log(
        `the maximum temperature will be ${maxTemp} the minimum temperature will be ${minTemp} the average temperature will be ${avgTemp}`
      );
      for (let i = 0; i < 3; i++) {
        let avgTemp = data["forecast"]["forecastday"][i]["day"]["avgtemp_c"];
        let minTemp = data["forecast"]["forecastday"][i]["day"]["mintemp_c"];
        let maxTemp = data["forecast"]["forecastday"][i]["day"]["maxtemp_c"];
        let date = data["forecast"]["forecastday"][i]["date"];
        const forcastedDay = new day(maxTemp, minTemp, avgTemp, date);
        forcastedDay.displayInfo(document.getElementById("forecastRoot"));
      }
    }, console.log("test"));
}

export { getForecast };
