import React from 'react';
import useWeather from '../hooks/useWeather';
import { FiMapPin } from "react-icons/fi";

const WeatherWidget = () => {
  const weather = useWeather("Sydney");

  return (
    <div className="flex flex-col items-center mt-4 mb-2">
      {weather.loaded ? (
        weather.icon ? (
          <div className="flex flex-row items-center gap-8">
            {/* Icon + Temp */}
            <div className="flex items-center gap-2">
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt=""
                className="w-16 h-16"
              />
              <div className="text-5xl font-bold">{weather.temp}&deg;</div>
              <div className="text-base font-medium ml-1">C</div>
            </div>
            {/* Weather stats */}
            <div className="flex flex-col text-left text-green-400 text-base ml-4 gap-1">
              <div className='flex flex-row gap-2'>
                <div className="font-semibold">Precipitation:</div>{" "}
                {typeof weather.rain === "number" ? `${weather.rain}%` : "0%"}
              </div>
              <div className='flex flex-row gap-2'>
                <div className="font-semibold">Humidity:</div>{" "}
                {typeof weather.humidity === "number" ? `${weather.humidity}%` : "N/A"}
              </div>
              <div className='flex flex-row gap-2'>
                <div className="font-semibold">Wind:</div>{" "}
                {typeof weather.wind === "number" ? `${weather.wind} km/h` : "N/A"}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-sm">N/A</div>
        )
      ) : (
        <div className="text-sm">Loading...</div>
      )}
      {/* Optional: Location label */}
      <div className="flex items-center gap-2 text-lg text-green-400 mt-4">
        <FiMapPin /> {weather.city || "Sydney, Australia"}
      </div>
    </div>
  );
};

export default WeatherWidget;
