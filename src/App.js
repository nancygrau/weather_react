import React from "react";
import "./App.css";
import Weather from "./weather";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
