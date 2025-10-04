import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-md mx-auto">
      <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
      <h3 className="text-lg font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
      <p className="text-red-600 mb-4">{message}</p>
      <button
        onClick={handleRetry}
        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <RefreshCw size={16} />
        Try Again
      </button>
      
      {message === 'City not found' && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Tips:</strong> Make sure the city name is spelled correctly or try searching with the country name (e.g., "London, UK").
          </p>
        </div>
      )}

      {message.includes('API key') && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Setup Required:</strong> Please add your OpenWeatherMap API key to the .env file.
            <br />
            Get your free API key at: <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="underline">openweathermap.org/api</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;