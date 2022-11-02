import React from "react";


const WeatherCard = ({ item }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
  return (
    <li className="city">
      <h2 className="city-name">
        <span>{item.name}</span>
        <sup>{item.sys.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(item.main.temp)}
        <sup>°C</sup>
      </div>
      <figure>
        <img className="city-icon" src={iconUrl} alt="city-icon" />
        <figcaption>{item.weather[0].description}</figcaption>
      </figure>
    </li>
  );
};

export default WeatherCard;
