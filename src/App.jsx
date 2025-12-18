
import {Routes, Route, Link} from "react-router-dom";
import "./App.css";
import { WeatherProvider } from "./components/WeatherProvider";
import { CityInputs } from "./components/CityInputs";
import { WeatherCard } from "./components/WeatherCard";
import { WeatherContext } from "./components/WeatherContext";
import { AboutPage } from "./pages/AboutPage";
import{HomePage} from "./pages/HomePage";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⛅ Weather comparison</h1>
        <p>Compare weather between your origin city and current location</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          
        </Routes>
     
        
      
    </div>
  );
}

export default App;
