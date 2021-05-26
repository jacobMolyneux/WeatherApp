export function displayImage(weather, container, description){
    const weatherImage = document.createElement('img');
    const ImageHolder = document.createElement('div');
    if(weather == 'Thunderstorm'){
        weatherImage.src = './Icons/thunderstorm.png';
    }
    else if(weather == 'Drizzle'){
        weatherImage.src = './Icons/RainImage.png';
    }
    else if(weather = 'Rain'){
        weatherImage.src = './Icons/RainImage.png';
    }
    else if (weather == 'Snow'){
        weatherImage.src = './Icons/snowIcon.png';
    }
    else if (weather == 'Clear'){
        weatherImage.src = './Icons/sunImage.png';
    }
    else if (weather == 'Clouds'){
        weatherImage.src = './Icons/CloudyIcon.png';
    }
    else{
        weatherImage.src = './Icons/haze.png';
    }
    ImageHolder.appendChild(weatherImage);
    weatherImage.setAttribute('Id', 'weatherImage');
    ImageHolder.setAttribute('id', 'weatherImageHolder'); 
    imageHolder.textContent = description;
    container.append(ImageHolder);
}