import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherDaily.css"
import axios from "axios";


export default function WeatherDailyForecast(props){
    let [loaded,setLoaded]= useState(false);
    let [forecast,setForecast]= useState(null);

    useEffect(()=> {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        return(
            <div className="WeatherDailyForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                        if (index < 5) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                    );}
                })} 
                </div>
            </div>
            );
    } else {
        let apiKey="8ee746d18f9f9f4609efcf4a58ee9252";
        let longitude=props.coordinates.lon;
        let latitude=props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse); 
            
        return null;
        }
}
   
    
    

    

    