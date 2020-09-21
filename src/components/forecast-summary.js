import React from "react";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
    <>
      <div className="date" data-testid="date-id">
        <span>{moment(date).format("ddd do MMM")}</span>
      </div>
      <div className="temperature" data-testid="temperature-id">
        {temperature}&deg;c
      </div>
      <div className="description" data-testid="description-id">
        {description}
      </div>
      <div className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <button value={date} onClick={handleForecastSelect}>
        More Details
      </button>
    </>
  );
};

export default ForecastSummary;
