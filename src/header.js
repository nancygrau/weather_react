import React from "react";
import "./weather.css";
import { ReactComponent as ForecastImage } from "./forecast.svg";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <button id="zurich"></button>Zürich
          </div>
          <div className="col-4">
            <button id="paris"></button>Paris
          </div>
          <div className="col-4">
            <button id="tokyo"></button>Tokyo
          </div>
        </div>
      </div>
      <br />
      <ForecastImage className="firstImage" />
    </div>
  );
}
