import React, { useState, useEffect } from "react";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import ForecastDetails from "./forecast-details";
import SearchForm from "./search-form";
import axios from "axios";

import "../styles/app.css";

const App = (props) => {
  const [selectedDate, setSelectedDate] = useState(0);

  const [forecasts, setForecasts] = useState([]);

  const [location, setLocation] = useState({ city: "", location: "" });

  useEffect(() => {
    axios
      .get("https://mcr-codes-weather.herokuapp.com/forecast")
      .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location);
      });
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const searchForCity = (city) => {
    axios
      .get("https://mcr-codes-weather.herokuapp.com/forecast?city=" + city)
      .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location);
      });
  };

  const handleKeyPress = (e) => {
    searchForCity(e.target.value);
  };

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />

      <SearchForm searchCity={searchForCity} handleKeyPress={handleKeyPress} />

      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
