import React from 'react';
import ForecastGraph from '../forecastGraph/ForecastGraph'

import '../forecast/Forecast.css'

function getDay(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayName = days[a.getDay()];
  return dayName;
}

const parseWeeklyData = (weeklyWeatherData) => {

  const weeklyData = weeklyWeatherData.map(value => {
    return {
      'x': getDay(value.dt),
      'y': Math.floor(value.temp.day)
    }
  })
  weeklyData.pop();
  return [{ "id": "7 Day Forecast", "data": weeklyData }]

};

const Forecast = (props) => {

  if(props.weeklyWeatherData === undefined) return null;
  const checking = parseWeeklyData(props.weeklyWeatherData);

  return (
    <div className="container">
      <ForecastGraph data={checking}/>
    </div>
  )
}

export default Forecast;
