let cityInput = document.getElementById('cityInput');
let searchBtn = document.getElementById('searchBtn');

let weatherDetails = document.getElementById('weatherDetails');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temp');
let description = document.getElementById('description');

searchBtn.addEventListener('click', function() {
    let city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    
   

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4df193dad162784c4db21b9fb5a9dc53`)
    .then(response => response.json())
    .then((data) => {
        if (data.cod == 200) {
            cityName.textContent = `City: ${data.name}`;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Weather: ${data.weather[0].description}`;
            let weatherMain=data.weather[0].main

            let videoBG;
            
            switch (weatherMain) {
                case "Clear": 
                    videoBG = "./assets/videos/clear1.mp4"; 
                    break;
                case "haze": 
                    videoBG = "./assets/videos/Haze1.mp4"; 
                    break;
                case "Mist": 
                    videoBG = "./assets/videos/mist.mp4"; 
                    break;
                case "Clouds": 
                    videoBG = "./assets/videos/clouds1.mp4"; 
                    break;
                case "Smoke": 
                    videoBG = "./assets/videos/smoke.mp4"; 
                    break;
                case "Snow": 
                    videoBG = "./assets/videos/snow2.mp4"; 
                    break;
                case "Thunderstorm":    
                    videoBG = "./assets/videos/thunder1.mp4"; 
                    break;
                case "Rain": 
                    videoBG = "./assets/videos/rain.mp4"; 
                    break;
                default: 
                    videoBG = "./assets/videos/default.mp4";
            }
            
            let videoElement = document.getElementById('backgroundVideo');
            videoElement.src = `${videoBG}`;
        } else {
            alert('City not found');
        }
    })
    .catch(err => {
        console.log("Error: " + err);
        alert('An error occurred while fetching data. Please try again later.');
    });
});

cityInput.addEventListener('input', () => {
    cityName.textContent = '';
    temperature.textContent = '';
    description.textContent = '';
    weatherDetails.classList.add('hidden');

});
