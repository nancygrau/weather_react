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
      imgUrl: response.data.weather[0].icon,}); 
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
    <div className="card w-100">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
          <input
            type="text"
            placeholder="Search for a city"
            className="form-control mb-3"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-50"/>
          </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
      </div>
    </div>
  );} 
  
else {
  search();
  return "Loading...";} 
}
