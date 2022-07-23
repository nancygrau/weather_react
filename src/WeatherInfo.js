import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){return(
<div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <h2><FormattedDate date={props.data.date}/></h2>
    <img
      src={props.data.imgUrl}
      alt={props.data.description}
      className="sun"
    />
    <h3 className="temperature">
      <span>{Math.round(props.data.temperature)}</span>
      <span className="units">
        <button className="celsius">°C</button> |{" "}
        <button className="fahrenheit">°F</button>
      </span>
    </h3>
    <div className="condition text-capitalize">{props.data.description}</div>
    <div className="wind">Wind: {props.data.wind} km/h</div>
    <div className="humidity">Humidity: {props.data.humidity}%</div>
    
    <div className="five-day">
    
    <div className="row justify-content-center">
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Monday</h5>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="sun text-capitalize"
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">High 15°C</li>
            <li className="list-group-item">Low 1°C</li>
            <li className="list-group-item">Sunny</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tuesday</h5>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="sun text-capitalize"
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">High 14°C</li>
            <li className="list-group-item">Low 1°C</li>
            <li className="list-group-item">Sunny</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Wednesday</h5>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="sun text-capitalize"
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">High 16°C</li>
            <li className="list-group-item">Low 2°C</li>
            <li className="list-group-item">Sunny</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Thursday</h5>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="sun text-capitalize"
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">High 17°C</li>
            <li className="list-group-item">Low 3°C</li>
            <li className="list-group-item">Sunny</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Friday</h5>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="sun text-capitalize"
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">High 17°C</li>
            <li className="list-group-item">Low 3°C</li>
            <li className="list-group-item">Sunny</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    </div>);}