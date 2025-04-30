// pages/index.tsx
import React, {useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';

const Home: React.FC = () => {
  const [weather,setWeather] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
     const fetchWeather = async () => {
       try {
         const response = await fetch('/api/weather?city=London');
         if (!response.ok) {
           throw new Error('Failed to fetch weather data');
         }
         const data = await response.json();
         setWeather(data);
       } catch (err) {
         setError(err.message);
       }
     };
     fetchWeather();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {error && <p className="text-red-500">{error}</p}
      {
