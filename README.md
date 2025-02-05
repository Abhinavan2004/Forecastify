

Chrome Extension

Overview

Real-Time Weather Teller is a simple and interactive Chrome extension that provides users with current weather updates. With this extension, users can enter any city name and instantly receive real-time weather information such as temperature and weather conditions.

Key Features

Fetches current weather information from OpenWeatherMap API.

Displays city name, temperature, and weather description.

Simple and user-friendly interface.

Lightweight and fast performance.

How to Install

Clone this repository or download it as a ZIP file.

Open Chrome and navigate to chrome://extensions/.

Enable Developer Mode using the toggle on the top right.

Click on Load Unpacked and select the folder containing the extension files.

The extension icon will now appear in the toolbar.

How to Use

Click the extension icon to open the popup.

Enter the name of the desired city.

Click the Get Weather button.

View the current weather details, including temperature and conditions.

Project Structure

Real-Time Weather Teller
├── index.html        # Main HTML file for the extension
├── script.js          # Fetches and displays weather data
├── style.css          # Styling for the popup UI
├── manifest.json      # Chrome extension configuration file
└── weather_icon.png   # Extension icon

Screenshots




API Usage

This extension fetches weather data from OpenWeatherMap API:

Geocoding Endpoint: https://api.openweathermap.org/geo/1.0/direct

Weather Data Endpoint: https://api.openweathermap.org/data/2.5/weather

Permissions

Geolocation: Allows the extension to use the user's location for fetching weather updates.

Active Tab: Ensures the extension functions correctly within the active browser tab.

Credits

Developer: Abhinav Anpan
