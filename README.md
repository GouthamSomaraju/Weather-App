Weather App

Overview

This Weather App provides real-time weather updates for any city entered by the user. It dynamically updates the background video based on the current weather conditions using the OpenWeatherMap API.

Features

Search for weather information by city name

Displays city name, temperature, and weather description

Dynamically updates background video based on weather conditions (e.g., clear, rain, snow, thunderstorm, etc.)

Responsive and stylish UI with Bootstrap and a dark-themed card

Technologies Used

HTML, CSS, JavaScript for frontend development

Bootstrap for styling and responsive layout

OpenWeatherMap API for fetching weather data

Dynamic Background Videos based on weather conditions

Installation & Usage

Clone this repository:

git clone https://github.com/yourusername/weather-app.git

Navigate to the project folder:

cd weather-app

Open index.html in your preferred browser.

API Configuration

This app uses the OpenWeatherMap API. Ensure you have a valid API key.

Replace the placeholder API key in script.js with your own key:

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`)

File Structure

/weather-app
├── assets/
│   ├── images/ (icons for weather conditions)
│   ├── videos/ (background videos for different weather conditions)
├── index.html
├── script.js
├── styles.css

Future Enhancements

Add geolocation support to fetch the user's current location weather automatically.

Improve UI animations and transitions.

Provide a 5-day weather forecast feature.
