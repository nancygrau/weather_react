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
      </header>
    </div>
  );
}

export default App;
