import { useEffect, useState } from "react";

// Swap in your API key if needed!
const API_KEY = "ba5e339c0274f7cddfdef3e386ee70a5";

function useWeather(defaultCity = "Sydney") {
  const [weather, setWeather] = useState({
    temp: null,
    icon: null,
    desc: "",
    loaded: false,
    city: defaultCity
  });

  useEffect(() => {
    function fetchWeatherByCoords(lat, lon) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
          if (data.weather && data.main) {
            setWeather({
              temp: Math.round(data.main.temp),
              icon: data.weather[0].icon,
              desc: data.weather[0].description,
              loaded: true,
              city: data.name
            });
          } else {
            setWeather(w => ({ ...w, loaded: true }));
          }
        })
        .catch(() => setWeather(w => ({ ...w, loaded: true })));
    }

    function fetchWeatherByCity(city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
          if (data.weather && data.main) {
            setWeather({
              temp: Math.round(data.main.temp),
              icon: data.weather[0].icon,
              desc: data.weather[0].description,
              loaded: true,
              city: data.name
            });
          } else {
            setWeather(w => ({ ...w, loaded: true }));
          }
        })
        .catch(() => setWeather(w => ({ ...w, loaded: true })));
    }

    // Try geolocation first
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          fetchWeatherByCity(defaultCity); // fallback
        },
        { timeout: 5000 }
      );
    } else {
      fetchWeatherByCity(defaultCity); // fallback
    }
  }, [defaultCity]);

  return weather;
}

export default useWeather;
