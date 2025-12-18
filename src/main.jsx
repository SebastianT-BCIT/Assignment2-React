import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import{BrowserRouter} from"react-router-dom";
import App from "./App.jsx";
import { WeatherProvider } from "./components/WeatherProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <WeatherProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </WeatherProvider>
    
  </StrictMode>
);
