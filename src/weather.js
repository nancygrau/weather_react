import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData]=useState({ ready: false });
  const[city, setCity]=useState(props.defaultCity)
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      date: new Date(response.data.dt*1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,}); 
  };
  function search(){
    const apiKey="8ee746d18f9f9f4609efcf4a58ee9252";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);}
  
  function handleSubmit(event){event.preventDefault();
    search();}

  function handleCityChange(event){setCity(event.target.value); 
    }

  if (weatherData.ready){return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a city"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button type="button" className="btn btn-primary">
            Search 🔎
          </button>
          <button type="button" className="btn btn-secondary">
            Current Location 📍
          </button>
        </form>
        <WeatherInfo data={weatherData}/>
      </div>
    </div>
  );} 
  
else {
  search();
  return "Loading...";} 
}
