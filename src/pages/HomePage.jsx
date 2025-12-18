import { useContext } from "react";
import { WeatherContext } from "../components/WeatherContext.jsx";
import { CityInputs } from "../components/CityInputs.jsx";
import { WeatherCard } from "../components/WeatherCard.jsx";

export function HomePage() {
    const { originCity, currentCity } = useContext(WeatherContext);
    return(
        <>
        <CityInputs />
      <main className="app-main">
        <div className="content-grid">
          <div className="weather-grid">
            <WeatherCard cityName={originCity} title="Origin city" />
            <WeatherCard cityName={currentCity} title="Current city" />
          </div>
        </div>
      </main>
        </>
    ) 
    };
    
