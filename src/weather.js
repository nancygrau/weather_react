import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData]=useState({ ready: false });
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
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",}); 
  };
  if (weatherData.ready){return (
    <div className="card">
      <div className="card-body">
        <form>
          <input
            type="text"
            placeholder="Search for a city"
            autoComplete="off"
            autoFocus="on"
          />
          <button type="button" className="btn btn-primary">
            Search 🔎
          </button>
          <button type="button" className="btn btn-secondary">
            Current Location 📍
          </button>
        </form>

        <h1>{weatherData.city}</h1>
        <h2><FormattedDate date={weatherData.date}/></h2>
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          className="sun"
        />
        <h3 className="temperature">
          <span>{Math.round(weatherData.temperature)}</span>
          <span className="units">
            <button className="celsius">°C</button> |{" "}
            <button className="fahrenheit">°F</button>
          </span>
        </h3>
        <div className="condition text-capitalize">{weatherData.description}</div>
        <div className="wind">Wind: {weatherData.wind} km/h</div>
        <div className="humidity">Humidity: {weatherData.humidity}%</div>
        
        <div class="five-day">

        <div class="row justify-content-center">
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Monday</h5>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="sun text-capitalize"
                />
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">High 15°C</li>
                <li class="list-group-item">Low 1°C</li>
                <li class="list-group-item">Sunny</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Tuesday</h5>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="sun text-capitalize"
                />
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">High 14°C</li>
                <li class="list-group-item">Low 1°C</li>
                <li class="list-group-item">Sunny</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Wednesday</h5>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="sun text-capitalize"
                />
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">High 16°C</li>
                <li class="list-group-item">Low 2°C</li>
                <li class="list-group-item">Sunny</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Thursday</h5>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="sun text-capitalize"
                />
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">High 17°C</li>
                <li class="list-group-item">Low 3°C</li>
                <li class="list-group-item">Sunny</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Friday</h5>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="sun text-capitalize"
                />
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">High 17°C</li>
                <li class="list-group-item">Low 3°C</li>
                <li class="list-group-item">Sunny</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );} else {const apiKey="8ee746d18f9f9f4609efcf4a58ee9252";

let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading...";} 
}
