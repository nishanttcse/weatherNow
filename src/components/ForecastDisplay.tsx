import React from 'react';
import { Calendar } from 'lucide-react';

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

interface ForecastDisplayProps {
  forecastData: ForecastData;
}

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ forecastData }) => {
  // Group forecast data by day and get one entry per day (around noon)
  const getDailyForecasts = () => {
    const dailyForecasts: { [key: string]: any } = {};
    
    forecastData.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toDateString();
      
      // Keep the forecast closest to noon (12:00)
      if (!dailyForecasts[dateKey] || 
          Math.abs(date.getHours() - 12) < Math.abs(new Date(dailyForecasts[dateKey].dt * 1000).getHours() - 12)) {
        dailyForecasts[dateKey] = item;
      }
    });

    return Object.values(dailyForecasts).slice(0, 5); // Get next 5 days
  };

  const dailyForecasts = getDailyForecasts();

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }
  };

  const formatDescription = (description: string) => {
    return description
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-4xl">
      <div className="flex items-center justify-center mb-6">
        <Calendar className="text-blue-500 mr-3" size={28} />
        <h3 className="text-2xl font-bold text-gray-800">5-Day Forecast</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 text-center border border-blue-100 hover:shadow-md transition-shadow duration-200">
            <div className="font-semibold text-gray-800 mb-2">
              {formatDate(forecast.dt)}
            </div>
            
            <div className="mb-3">
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt={forecast.weather[0].description}
                className="w-16 h-16 mx-auto"
              />
            </div>

            <div className="text-sm text-gray-600 mb-3 h-10 flex items-center justify-center">
              {formatDescription(forecast.weather[0].description)}
            </div>

            <div className="space-y-1">
              <div className="text-lg font-semibold text-gray-800">
                {Math.round(forecast.main.temp_max)}°C
              </div>
              <div className="text-sm text-gray-500">
                {Math.round(forecast.main.temp_min)}°C
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;