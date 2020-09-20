import React from "react";

const ForecastSummary = (props) => (
  <h2 className="forecast-summary">
    <span className="date">{props.date}</span>{" "}
    <span className="temperature">{props.temperature}</span>{" "}
    <span className="description">{props.description}</span>
    <span className="icon">{props.icon}</span>
  </h2>
);

export default ForecastSummary;
