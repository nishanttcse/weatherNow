import React from 'react';
import { MapPin, Thermometer, Droplets, Eye } from 'lucide-react';

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  visibility: number;
  wind: {
    speed: number;
  };
}

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  const { name, sys, main, weather, visibility, wind } = weatherData;
  const currentWeather = weather[0];

  const formatDescription = (description: string) => {
    return description
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-2xl">
      {/* Location Header */}
      <div className="flex items-center justify-center mb-6">
        <MapPin className="text-blue-500 mr-2" size={24} />
        <h2 className="text-3xl font-bold text-gray-800">
          {name}, {sys.country}
        </h2>
      </div>

      {/* Main Weather Info */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
            alt={currentWeather.description}
            className="w-32 h-32"
          />
        </div>
        <div className="text-6xl font-bold text-gray-800 mb-2">
          {Math.round(main.temp)}°C
        </div>
        <div className="text-xl text-gray-600 mb-2">
          {formatDescription(currentWeather.description)}
        </div>
        <div className="text-lg text-gray-500">
          Feels like {Math.round(main.feels_like)}°C
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <Droplets className="text-blue-500 mx-auto mb-2" size={24} />
          <div className="text-2xl font-semibold text-gray-800">{main.humidity}%</div>
          <div className="text-sm text-gray-600">Humidity</div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 text-center">
          <Thermometer className="text-green-500 mx-auto mb-2" size={24} />
          <div className="text-2xl font-semibold text-gray-800">{main.pressure} hPa</div>
          <div className="text-sm text-gray-600">Pressure</div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <Eye className="text-purple-500 mx-auto mb-2" size={24} />
          <div className="text-2xl font-semibold text-gray-800">{Math.round(visibility / 1000)} km</div>
          <div className="text-sm text-gray-600">Visibility</div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <div className="text-orange-500 mx-auto mb-2 text-2xl">💨</div>
          <div className="text-2xl font-semibold text-gray-800">{Math.round(wind.speed * 3.6)} km/h</div>
          <div className="text-sm text-gray-600">Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;