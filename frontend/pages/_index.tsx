import React, { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
   const [weatherData, setWeatherData] = useState<any>(null);

   const fetchWeather = async (city: string) => {
       const response = await fetch('/api/weather?city=${Nairobi}');
       const data = await response.json();
       setWeatherData(data);
   };

   return (
       <div className="container mx-auto p-4">
           <SearchBar onSearch={fetchWeather} />
           {weatherData && (
               <WeatherCard
                   city={weatherData.city}
                   temperature={weatherData.temperature}
                   description={weatherData.description}
               />
           )}
       </div>
   );
};

export default Home;
