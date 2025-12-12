import { WeatherContext } from "./WeatherContext";
import { useContext } from "react";

export function CityInputs() {
  const { originCity, setOriginCity, currentCity, setCurrentCity } = useContext(WeatherContext);

  return (
    <form className="city-inputs">
      <div className="input-group">
        <label htmlFor="origin">Origin city:</label>
        <input
          id="origin"
          type="text"
          placeholder="Search city..."
          value={originCity}
          onChange={(e) => setOriginCity(e.target.value)}
          className="city-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="current">Current city: </label>
        <input
          id="current"
          type="text"
          placeholder="Search city..."
          value={currentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
          className="city-input"
        />
      </div>
    </form>
  );
}
