import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="animate-spin text-blue-500 mb-4" size={48} />
      <p className="text-lg text-gray-600 font-medium">Loading weather data...</p>
      <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the latest information</p>
    </div>
  );
};

export default Loader;