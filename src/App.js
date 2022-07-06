import "./App.css";
import Weather from "./weather";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Weather />
        <Footer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
