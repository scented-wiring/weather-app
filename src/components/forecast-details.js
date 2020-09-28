import React from "react";
import moment from "moment";

const ForecastDetails = (props) => {
  return (
    <div className="forecast-details">
      <div className="forecast-details-date">
        {moment(props.forecast.date).format("ddd Do MMM")}
      </div>
      <div>Max temperature: {props.forecast.temperature.max}°c</div>
      <div>Min temperature: {props.forecast.temperature.min}°c</div>
      <div>Humidity: {props.forecast.humidity}</div>
      <div>Wind speed: {props.forecast.wind.speed}</div>
      <div>Wind direction: {props.forecast.wind.direction.toUpperCase()}</div>
    </div>
  );
};

export default ForecastDetails;
