import React from "react";
import "./weather.css";


export default function Header() {
  

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
