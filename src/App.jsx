import { useContext } from "react";
import "./App.css";
import { WeatherProvider } from "./components/WeatherProvider";
import { CityInputs } from "./components/CityInputs";
import { WeatherCard } from "./components/WeatherCard";
import { WeatherContext } from "./components/WeatherContext";

function App() {
  const { originCity, currentCity } = useContext(WeatherContext);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⛅ Weather comparison</h1>
        <p>Compare weather between your origin city and current location</p>
      </header>
      <CityInputs />
      <main className="app-main">
        <div className="content-grid">
          <div className="weather-grid">
            <WeatherCard cityName={originCity} title="Origin city" />
            <WeatherCard cityName={currentCity} title="Current city" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
