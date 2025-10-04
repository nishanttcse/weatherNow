import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { Cloud } from 'lucide-react';

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

interface ForecastData {
  list: Array<{
    dt: number;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
    dt_txt: string;
  }>;
}

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchWeatherData = async (cityName: string) => {
    if (!apiKey) {
      setError('API key not configured. Please add your OpenWeatherMap API key to the .env file.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error('City not found');
      }

      const weather = await weatherResponse.json();

      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const forecast = forecastResponse.ok ? await forecastResponse.json() : null;

      setWeatherData(weather);
      setForecastData(forecast);

      // Save to localStorage
      localStorage.setItem('lastSearchedCity', cityName);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (cityName: string) => {
    setCity(cityName);
    fetchWeatherData(cityName);
  };

  // Load last searched city on mount
  useEffect(() => {
    const lastCity = localStorage.getItem('lastSearchedCity');
    if (lastCity) {
      setCity(lastCity);
      fetchWeatherData(lastCity);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cloud className="text-blue-500" size={40} />
            <h1 className="text-4xl font-bold text-gray-800">WeatherNow</h1>
          </div>
          <p className="text-gray-600 text-lg">Get real-time weather information for any city worldwide</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} initialValue={city} />
        </div>

        {/* Loading State */}
        {loading && <Loader />}

        {/* Error State */}
        {error && <ErrorMessage message={error} />}

        {/* Weather Display */}
        {weatherData && !loading && !error && (
          <div className="space-y-8">
            <WeatherDisplay weatherData={weatherData} />
            {forecastData && <ForecastDisplay forecastData={forecastData} />}
          </div>
        )}

        {/* Welcome Message */}
        {!weatherData && !loading && !error && (
          <div className="text-center py-16">
            <Cloud className="text-gray-400 mb-4 mx-auto" size={64} />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Welcome to WeatherNow</h2>
            <p className="text-gray-500">Search for a city to get started with live weather updates</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;