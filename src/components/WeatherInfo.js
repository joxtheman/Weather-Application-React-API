import React from "react";

const WeatherInfo = props => {
  return (
    <div className="weather">
      <div className="weather-elements">
        <span>Temperature:</span>
        {props.data.main.temp ? props.data.main.temp : "***"}
      </div>
      <div className="weather-elements">
        <span>Pressure:</span>
        {props.data.main.pressure ? props.data.main.pressure : "***"}
      </div>
      <div className="weather-elements">
        <span> Humidity:</span>
        {props.data.main.humidity ? props.data.main.humidity : "***"}
      </div>
    </div>
  );
};

export default WeatherInfo;
