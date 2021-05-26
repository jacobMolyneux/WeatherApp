export function displayImage(weather, container, description){
    const weatherImage = document.getElementById('icon');
    const ImageHolder = document.getElementById('iconDiv');
    if(weather == 'Thunderstorm'){
        weatherImage.src = './Icons/thunderstorm.png';
    }
    else if(weather == 'Drizzle'){
        weatherImage.src = './Icons/RainImage.png';
    }
    else if(weather == 'Rain'){
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
    container.appendChild(weatherImage);
    weatherImage.setAttribute('id', 'icon');
    ImageHolder.setAttribute('id', 'iconDiv'); 
    ImageHolder.textContent = description;
    container.appendChild(ImageHolder);
}