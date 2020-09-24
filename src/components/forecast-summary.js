import React from "react";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  return (
    <div className="forecast-summary">
      <div className="date" data-testid="date-id">
        {moment(props.date).format("ddd Do MMM")}
      </div>
      <div className="temperature" data-testid="temperature-id">
        {props.temperature}°c
      </div>
      <div className="description" data-testid="description-id">
        {props.description}
      </div>
      <div className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
      <button onClick={() => props.onSelect(props.date)}>More Details</button>
    </div>
  );
};

export default ForecastSummary;
