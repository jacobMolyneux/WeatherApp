(()=>{"use strict";async function e(e){fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=993f916fa6417076b75a3735eeb0d504`).then((e=>e.json())).then((t=>{console.log(t),console.log(t.main);let n=t.main.temp,o=t.main.feels_like,i=t.main.temp_max,d=t.main.temp_min,m=t.main.humidity;console.log(`The Temperature is ${n} and feels like ${o}. The Humidity is ${m}.`),function(e,t,n,o,i,d){let m=document.getElementById("temperature"),a=document.getElementById("details"),c=document.getElementById("location"),l=document.getElementById("maxTemp"),s=document.getElementById("minTemp"),u=document.getElementById("humidity");u.textContent=`Humidity: ${n}`,s.textContent=`Low: ${i} C`,l.textContent=`High: ${o} C`,m.textContent=e+"C",c.textContent=t.toUpperCase(),a.appendChild(l),a.appendChild(s),a.appendChild(u)}(n,e,m,i,d);let a=t.weather[0].description;!function(e,t,n){const o=document.getElementById("icon"),i=document.getElementById("iconDiv");o.src="Thunderstorm"==e?"./Icons/thunderstorm.png":"Drizzle"==e||"Rain"==e?"./Icons/RainImage.png":"Snow"==e?"./Icons/snowIcon.png":"Clear"==e?"./Icons/sunImage.png":"Clouds"==e?"./Icons/CloudyIcon.png":"./Icons/haze.png",t.appendChild(o),o.setAttribute("id","icon"),i.setAttribute("id","iconDiv"),i.textContent=n,t.appendChild(i)}(t.weather[0].main,document.getElementById("currentWeatherDisplayDiv"),a)}))}const t=document.getElementById("search");document.getElementById("searchButton").addEventListener("click",(function(){e(t.value)}));let n=e(t.value);console.log(n)})();