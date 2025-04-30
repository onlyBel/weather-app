// components/WeatherCard.tsx
import React from 'react';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-lg">{temperature}^C</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WeatherCard;
