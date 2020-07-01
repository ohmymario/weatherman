import React, { useState, useEffect } from 'react';
import ForecastGraph from '../forecastGraph/ForecastGraph'

import '../forecast/Forecast.css'

function getDay(UNIX_timestamp){
  const a = new Date(UNIX_timestamp * 1000);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[a.getDay()];
  return dayName;
}

function getTime(UNIX_timestamp){
  const a = new Date(UNIX_timestamp * 1000);
  const options = {
    hour: 'numeric',
    hour12: true
  };
  const timeString = a.toLocaleString('en-US', options);
  return timeString;
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

const parseHourlyData = (hourlyWeatherData) => {
  const hourlyData = hourlyWeatherData.map(value => {
    return {
      'x': getTime(value.dt),
      'y': Math.floor(value.temp)
    }
  })

  hourlyData.shift();
  hourlyData.splice(24);
  return [{ "id": "Hourly Forecast", "data": hourlyData }]
};

const parseWeeklyHighLowData = (weeklyWeatherData) => {
  const HighWeekly = weeklyWeatherData.map(value => {
    return {
      'x': getDay(value.dt),
      'y': Math.floor(value.temp.max)
    }
  })

  const LowWeekly = weeklyWeatherData.map(value => {
    return {
      'x': getDay(value.dt),
      'y': Math.floor(value.temp.min)
    }
  })

  HighWeekly.pop();
  LowWeekly.pop();
  return [{ "id": "Low", "data": LowWeekly }, { "id": "High", "data": HighWeekly }]
};

const Forecast = (props) => {

  const [ graphData, setGraphData ] = useState(null);
  const [ weekly, setWeeklyData ] = useState(null);
  const [ hourly, setHourlyData ] = useState(null);
  const [ highLow, setHighLowData ] = useState(null);
  const [ axis, setAxis ] = useState(0);
  const { weeklyWeatherData, hourlyWeatherData } = props;

  useEffect(() => {
    if(weeklyWeatherData === undefined) return;
    setGraphData(parseWeeklyData(weeklyWeatherData))

  }, [weeklyWeatherData])

  useEffect(() => {
    if(weeklyWeatherData === undefined || hourlyWeatherData === undefined ) return;
    setWeeklyData(parseWeeklyData(weeklyWeatherData))
    setHighLowData(parseWeeklyHighLowData(weeklyWeatherData))
    setHourlyData(parseHourlyData(hourlyWeatherData))

  }, [hourlyWeatherData, weeklyWeatherData])

  function changeGraph(type, axis = 0) {
    setGraphData(type)
    setAxis(axis)
  }

  if(weeklyWeatherData === undefined || hourlyWeatherData === undefined ) return null;

  return (
    <div className="forecast-container">
      <div className="forecast-btns-container">
        <button className="forecast-btn" onClick={() => changeGraph(hourly, -30)}>24 Hour</button>
        <button className="forecast-btn" onClick={() => changeGraph(weekly)}>Weekly</button>
        <button className="forecast-btn" onClick={() => changeGraph(highLow)}>High / Low</button>
      </div>
      { graphData !== null && <ForecastGraph data={graphData} bAxis={axis}/> }
    </div>
  )
}

export default Forecast;
