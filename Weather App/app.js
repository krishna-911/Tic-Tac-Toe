const apiKey = "0fe639173f3331d0b87f56cd0f61a52a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const weatherIcon= document.querySelector('.weather-icon');


async function checkWeather (city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404 || 400) {
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
    }
    else {
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hr';
    
        if (data.weather[0].main == 'Clouds' ) {
            weatherIcon.src = 'images/clouds.png';
        } else if (data.weather[0].main == 'Clear') {
             weatherIcon.src = 'images/clear.png';
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
         } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png';
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png';
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'images/snow.png';
       }
    
       document.querySelector('.main').style.display = 'block';
       document.querySelector('.error').style.display = 'none'
    }


    

      

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
}); 