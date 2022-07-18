import React from "react";
import "./weather.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        👩‍💻 This project was coded by Nancy Grau and is{" "}
        <a
          href="https://github.com/nancygrau/weather_react"
          rel="noreferrer"
          target="_blank"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}
