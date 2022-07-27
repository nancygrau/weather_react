import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){return(
<div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <h2><FormattedDate date={props.data.date}/></h2>
    <WeatherIcon code={props.data.imgUrl} size={52}/>
    <WeatherTemperature celsius={props.data.temperature}/>
    
    <div className="condition text-capitalize">{props.data.description}</div>
    <div className="wind">Wind: {props.data.wind} km/h</div>
    <div className="humidity">Humidity: {props.data.humidity}%</div>
    </div>);}