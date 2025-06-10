import React from 'react';
import useWeather from '../hooks/useWeather';
import { FiMapPin } from "react-icons/fi";

const WeatherWidget = () => {
  const weather = useWeather("Sydney");

  return (
    <div className="flex flex-col items-center mt-2">
      {weather.loaded ? (
        weather.icon ? (
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center gap-2 text-sm"> 
              {weather.date} {weather.time}
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.desc}
              className="w-10 h-10"
            />
            <div className="text-lg font-semibold">{weather.temp}&deg;C</div>
            </div>
            <div className="text-sm capitalize">{weather.desc}</div>
            <div className="flex items-center gap-2 text-lg">
                <FiMapPin /> {weather.city || "Sydney, Australia"}
            </div>
          </div>
          
        ) : (
          <div className="text-sm">N/A</div>
        )
      ) : (
        <div className="text-sm">Loading...</div>
      )}
    </div>
  );
};

export default WeatherWidget;
