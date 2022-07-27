import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherDaily.css"
import axios from "axios";


export default function WeatherDailyForecast(props){
    let [loaded,setLoaded]= useState(false);
    let [forecast,setForecast]= useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        return(
            <div className="WeatherDailyForecast">
                <div className="row">
                    <div className="col">
                       <WeatherForecastDay data={forecast[0]}/>
                    </div>
                </div>
            </div>
            );
    } else {
        let apiKey="8ee746d18f9f9f4609efcf4a58ee9252";
        let longitude=props.coordinates.lon;
        let latitude=props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse); 
            
        return null;
        }
}
   
    
    

    

    