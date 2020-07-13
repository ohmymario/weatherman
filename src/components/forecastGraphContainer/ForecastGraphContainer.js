import React, { useState, useEffect } from 'react';
import ForecastGraph from '../forecastGraph/ForecastGraph'
import './ForecastGraphContainer.css'

function getDay(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[a.getDay()];
  return dayName;
}

function getTime(UNIX_timestamp) {
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

const ForecastGraphContainer = (props) => {
  const { weeklyWeatherData, hourlyWeatherData } = props;

  const [graphData, setGraphData] = useState(null);
  const [weekly, setWeeklyData] = useState(null);
  const [hourly, setHourlyData] = useState(null);
  const [highLow, setHighLowData] = useState(null);
  const [active, setActive] = useState('7day')
  const [axis, setAxis] = useState(0);

  useEffect(() => {
    if (weeklyWeatherData === undefined) return;
    setGraphData(parseWeeklyData(weeklyWeatherData))
    changeGraph(weekly)
    setActive('7day')

  }, [weekly, weeklyWeatherData])

  useEffect(() => {
    if (weeklyWeatherData === undefined || hourlyWeatherData === undefined) return;
    setWeeklyData(parseWeeklyData(weeklyWeatherData))
    setHighLowData(parseWeeklyHighLowData(weeklyWeatherData))
    setHourlyData(parseHourlyData(hourlyWeatherData))

  }, [hourlyWeatherData, weeklyWeatherData])

  function changeGraph(type, e, axis = 0) {
    if(e) {
      setActive(e.target.value)
    }
    setGraphData(type)
    setAxis(axis)
  }

  return (
    <div className="forecast-container">
      {
        graphData &&
        <>
          <div className="forecast-btns-container">
            <button className={active === '24hours' ? 'active-btn' : ''} value={'24hours'} onClick={(e) => changeGraph(hourly, e, -30)}>24 Hours</button>
            <button className={active === '7day' ? 'active-btn' : ''} value={'7day'} onClick={(e) => changeGraph(weekly, e)}>Next 7 days</button>
            <button className={active === 'highlow' ? 'active-btn' : ''} value={'highlow'} onClick={(e) => changeGraph(highLow, e)}>High / Low</button>
          </div>
          <div className="forecast-graph-container" >
            {graphData !== null && <ForecastGraph data={graphData} bAxis={axis} />}
          </div>
        </>
      }
    </div>
  )
}

export default ForecastGraphContainer;
