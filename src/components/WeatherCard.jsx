import { useState, useEffect } from "react";

export function WeatherCard(props) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!props.cityName.trim()) {
      setWeather(null);
      setLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${props.cityName}&aqi=no`);

        if (!res.ok) throw new Error("City not found.");

        const data = await res.json();

        if (isMounted) {
          setWeather(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
        setWeather(null);
        setLoading(false);
      }
    };

    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, [props.cityName]);

  if (loading) return <div className="weather-card loading">Loading...</div>;
  if (error) return <div className="weather-card error">Error: {error}</div>;
  if (!weather) return <div className="weather-card error">No data yet</div>;

  return (
    <div className="weather-card">
      <div>
        <h3>{props.title}</h3>
        <p className="city-name">
          {weather?.location.name}, {weather?.location.country}
        </p>
      </div>
      <div className="temperature">
        <p className="temp-value">{weather?.current.temp_c}°C</p>
        <p className="description">{weather?.current.condition.text}</p>
      </div>
      <div className="weather-details">
        <div className="detail-item">
          <p className="label">Humidity</p>
          <p className="value">{weather?.current.humidity}%</p>
        </div>
        <div className="detail-item">
          <p className="label">Wind speed</p>
          <p className="value">{weather?.current.wind_kph} Km/h</p>
        </div>
      </div>
    </div>
  );
}
