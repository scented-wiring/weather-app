import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import ForecastDetails from "./forecast-details";

import "../styles/app.css";

const App = (props) => {
  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);

  const selectedForecast = props.forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="forecast">
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />

      <ForecastSummaries
        forecasts={props.forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
