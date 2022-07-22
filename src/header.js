import React from "react";
import axios from "axios";
import "./weather.css";


export default function Header() {
  const apiKey="8ee746d18f9f9f4609efcf4a58ee9252";
  let city="Zürich"
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <button className="zurich">Zürich</button>
          </div>
          <div className="col-4">
            <button className="paris">Paris</button>
          </div>
          <div className="col-4">
            <button className="tokyo">Tokyo</button>
          </div>
        </div>
      </div>
      <br />
      <img src="/forecast.svg" className="firstImage" alt="forecast" />
    </div>
  );
}
