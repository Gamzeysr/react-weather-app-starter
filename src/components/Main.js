import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import WeatherCard from "./WeatherCard";


const Main = () => {
  const [searchText, setSearchText] = useState("ankara");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState("");

  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";

  const iconUrl = `https://openweathermap.org/img/wn/icon@2x.png`;



  const getWeather = async () => {


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

    const resault = await axios(url)

    setWeather([...weather, resault.data])

    console.log(resault.data)
  }
  console.log(weather)

  useEffect(() => {
    getWeather()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    // getWeather()
    if (searchText == "") {
      setError("bir sehir giriniz")
      setTimeout(() => {
        setError("")
      }, 3000);
    } else {
      getWeather()
      setSearchText("")
    }
  }



  return (
    <section className="main">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} name="city" type="text" placeholder="Search for a city" autoFocus />
        <button type="submit">SUBMIT</button>
        <span className="msg">{error}</span>
      </form>
      <div className="container">
        <ul className="cities">
          {weather.map((item, index) => {
            return (
              <WeatherCard key={index} item={item} />
            )
          })}</ul>
      </div>
    </section>
  );
};
export default Main;
